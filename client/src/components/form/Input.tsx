import Title from "components/Title";

export default function Input({
	type = "text",
	label,
	name,
	required,
	value,
	placeholder,
	className,
	onChange,
}: {
	type?: string;
	label?: string;
	name?: string;
	required?: boolean;
	value?: string | number | readonly string[];
	placeholder?: string;
	className?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) {
	return (
		<>
			{label && (
				<Title>
					{label}
					{required && <span className="text-red-500">*</span>}
				</Title>
			)}
			<input
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				required={required}
				placeholder={placeholder}
				className={`shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-200 dark:bg-gray-800 dark:border-gray-800 text-gray-800 bg-gray-200 border-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline ${className}`}
			/>
		</>
	);
}
