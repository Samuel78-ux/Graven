import LinkAppBar from "@/components/LinkAppBar";
import Link from "next/link";

const AppBar = () => {
	return (
		<div className="flex shadow-lg py-4 justify-end">
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
