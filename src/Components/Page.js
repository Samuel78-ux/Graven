import AppBar from "./AppBar";

const Page = (props) => {
	const { children } = props;

	return (
		<div className="flex flex-col">
			<AppBar />
			{children}
		</div>
	);
};

export default Page;