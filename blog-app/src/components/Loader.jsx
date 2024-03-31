import React from "react";

function Loader() {
	return (
		<div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
			<div className="w-16 h-16 border-t-4 border-b-4 border-gray-100 rounded-full animate-spin"></div>
		</div>
	);
}

export default Loader;
