import Link from "next/link";
import LinkAppBar from "./LinkAppBar";
import { HomeModernIcon } from "@heroicons/react/24/outline";

const AppBar = () => {
	return (
		<div className="flex shadow-lg p-4 justify-between">
			<Link
				href="/"
				className="p-2 font-bold flex gap-2 text-xl items-center justify-center"
			>
				<HomeModernIcon className="w-6 h-6" />
				JedImmo
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
