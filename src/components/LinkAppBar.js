import clsx from "clsx";
import Link from "next/link";

const LinkAppBar = (props) => {
	const { children, className, ...otherProps } = props;

	return (
		<Link
			className={clsx("rounded text-white shadow-lg", className)}
			{...otherProps}
		>
			{children}
		</Link>
	);
};

export default LinkAppBar;
