import React from "react";

export default function Button({
	children,
	type = "button",
	bgColor = "bg-blue-600",
	textColor = "text-white",
	className = "",
	...props
}) {
	return (
		<button
			className={`rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 
 ${bgColor} ${textColor} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}
