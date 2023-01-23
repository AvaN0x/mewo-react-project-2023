export default function Input({
	type = "text",
	label,
	name,
	required,
}: {
	type?: string;
	label?: string;
	name?: string;
	required?: boolean;
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
				className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
			/>
		</>
	);
}
