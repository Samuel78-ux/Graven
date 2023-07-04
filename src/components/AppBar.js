import Link from "next/link";

const AppBar = () => {
	return (
		<div className="flex shadow-lg py-4 justify-end">
			<div className="flex gap-4 mr-5">
				<Link className="bg-green-500 rounded text-white p-2" href="/sign-in">
					Se connecter
				</Link>
				<Link
					href="register"
					className="bg-blue-500 rounded text-white px-3 py-2"
				>
					S'inscrire
				</Link>
			</div>
		</div>
	);
};

export default AppBar;
