import { Link } from "react-router-dom";

function App() {
	console.log(import.meta.env);

	return (
		<div>
			<Link to="/auth/register">Register</Link>
			<br />
			<Link to="/auth/login">Login</Link>
			<br />
			<Link to="/route_do_not_exist">Error</Link>
			<br />
			api_url: '{import.meta.env.VITE_API_URL}'
		</div>
	);
}

export default App;
