import { useState } from "react";

const SelectRender = () => {
	const [isAuth, setIsAuth] = useState(false);
	console.log(isAuth);

	return (
		<div>
			SelectRender
			{isAuth ? <h1>User: Elcho</h1> : <h2>Login</h2>}
			{/* {isAuth && <h1>User: Elcho</h1>} */}
			<button onClick={() => setIsAuth(!isAuth)}>auth</button>
		</div>
	);
};

export default SelectRender;
