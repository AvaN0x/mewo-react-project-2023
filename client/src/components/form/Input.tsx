export default function Input({
	type = "text",
	label,
	name,
	required,
	value,
	onChange,
}: {
	type?: string;
	label?: string;
	name?: string;
	required?: boolean;
	value?: string | number | readonly string[];
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) {
	return (
		<>
			{label && (
				<label className="block text-gray-800 dark:text-gray-200 text-sm font-bold mb-2 uppercase">
					{label}
					{required && <span className="text-red-500">*</span>}
				</label>
			)}
			<input
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-200 dark:bg-gray-800 dark:border-gray-800 text-gray-800 bg-gray-200 border-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
			/>
		</>
	);
}
