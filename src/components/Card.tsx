import axios from "axios";
import { useState } from "react";
import { CardType } from "../types";

const url = import.meta.env.VITE_BACKEND_URL;

const Card = () => {
	const [cars, setCars] = useState<CardType[]>([]);
	const [name, setName] = useState("");
	const [img, setImg] = useState("");
	const [price, setPrice] = useState("");
	const [sold, setSold] = useState("");
	const [description, setDescription] = useState("");

	const getCars = async () => {
		try {
			const response = (await axios.get(url)).data;
			console.log(response);
			setCars(response);
		} catch (err) {
			console.error(err);
		}
	};

	const postCars = async () => {
		const newCar = {
			name,
			img,
			price,
			sold,
			description,
		};

		try {
			const response = (await axios.post<CardType[]>(url, newCar)).data;
			console.log(response);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div>
			Card
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input type="url" value={img} onChange={(e) => setImg(e.target.value)} />
			<input
				type="number"
				value={price}
				onChange={(e) => setPrice(e.target.value)}
			/>
			<input
				type="text"
				value={sold}
				onChange={(e) => setSold(e.target.value)}
			/>
			<input
				type="text"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button onClick={getCars}>get cars</button>
			<button onClick={postCars}>Add Car</button>
			{cars.map((item) => (
				<div key={item._id}>
					<h1>{item.name}</h1>
					<img src={item.img} alt={item.name} />
					<p>{item.price}</p>
					<p>{item.sold}</p>
					<p>{item.description}</p>
				</div>
			))}
		</div>
	);
};

export default Card;
