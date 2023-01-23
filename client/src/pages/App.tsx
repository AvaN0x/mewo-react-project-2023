import { Link } from "react-router-dom";
import { useAuth } from "../components/context/AuthProvider";

function App() {
	const { user } = useAuth();

	return (
		<div>
			<Link to="/auth/register">Register</Link>
			<br />
			<Link to="/auth/login">Login</Link>
			<br />
			<Link to="/route_do_not_exist">Error</Link>
			<br />
			api_url: '{import.meta.env.VITE_API_URL}'
			<br />
			<pre>{JSON.stringify(user, null, 2)}</pre>
		</div>
	);
}

export default App;
