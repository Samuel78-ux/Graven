import clsx from "clsx";
import { ErrorMessage, Field as FieldFormik } from "formik";

const Field = (props) => {
	const { name, placeholder, className, ...otherProps } = props;

	return (
		<div>
			<FieldFormik
				name={name}
				placeholder={placeholder}
				className={clsx(
					"w-full rounded border-2 border-blue-400 bg-transparent px-2 py-1 focus:border-blue-600",
					className
				)}
				{...otherProps}
			/>
			<ErrorMessage
				name={name}
				component="span"
				className="w-full text-sm font-bold text-red-500"
			/>
		</div>
	);
};

export default Field;
