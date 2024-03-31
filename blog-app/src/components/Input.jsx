import React, { useId } from "react";

const Input = React.forwardRef(function Input(
	{ label, type = "text", className = "", ...props },
	ref
) {
	const id = useId();
	return (
		<div className="w-full">
			{label && (
				<label
					className="inline-block pl-1 mb-1 text-sm font-medium text-gray-700"
					htmlFor={id}
				>
					{label}
				</label>
			)}
			<input
				type={type}
				className={`px-3 py-2 rounded-lg bg-white text-gray-800 outline-none focus:bg-gray-50 focus:border-blue-500 duration-200 border border-gray-300 w-full ${className}`}
				ref={ref}
				{...props}
				id={id}
			/>
		</div>
	);
});

export default Input;
