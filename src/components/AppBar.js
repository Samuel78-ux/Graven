import Link from "next/link";
import LinkAppBar from "./LinkAppBar";

const AppBar = () => {
	return (
		<div className="flex shadow-lg p-4 justify-between">
			<Link href="/" className="p-2 font-bold">
				Accueil
			</Link>
			<div className="flex gap-4 mr-5">
				<LinkAppBar className="bg-green-500 p-2" href="/sign-in">
					Se connecter
				</LinkAppBar>
				<LinkAppBar href="register" className="bg-blue-500 px-3 py-2">
					S'inscrire
				</LinkAppBar>
			</div>
		</div>
	);
};

export default AppBar;
