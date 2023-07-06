import Link from "next/link";
import LinkAppBar from "./LinkAppBar";
import { HomeModernIcon } from "@heroicons/react/24/outline";
import useSession from "@/web/hooks/useSession";

const AppBar = () => {
	const { session, signOut } = useSession();

	return (
		<div className="flex shadow-lg p-4 justify-between">
			<Link
				href="/"
				className="p-2 font-bold flex gap-2 text-xl items-center justify-center"
			>
				<HomeModernIcon className="w-6 h-6" />
				<div>JedImmo</div>
			</Link>
			<div className="flex gap-4 mr-5">
				{session ? (
					<div>
						<LinkAppBar className="bg-red-200 p-2" href="/dashboard">
							Dashbord
						</LinkAppBar>
						<button
							className="bg-red-500 px-3 py-2 rounded text-white"
							onClick={signOut}
						>
							Se déconnecter
						</button>
					</div>
				) : (
					<div>
						<LinkAppBar className="bg-green-500 p-2" href="/sign-in">
							Se connecter
						</LinkAppBar>
						<LinkAppBar href="register" className="bg-blue-500 px-3 py-2">
							S'inscrire
						</LinkAppBar>
					</div>
				)}
			</div>
		</div>
	);
};

export default AppBar;