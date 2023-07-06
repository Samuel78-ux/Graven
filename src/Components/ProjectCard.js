import convertPrice from "../utils/convertPrice";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = (props) => {
	const { name, description, src, price, duration } = props;

	return (
		<Link href="/sign-in">
			<div className="rounded border-2 w-fit hover:scale-110 transition-all">
				<Image
					src={src}
					className="rounded-t"
					alt="image"
					width={300}
					height={50}
				/>
				<div className="flex flex-col p-2">
					<p className="font-medium">{name}</p>
					<p className="text-slate-600">{description}</p>
					<div className="flex mt-2 justify-end">
						<div className="flex gap-3 text-slate-700">
							<p>{convertPrice(price)}</p>
							<p className="font-medium">|</p>
							<p>{duration} mois</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProjectCard;