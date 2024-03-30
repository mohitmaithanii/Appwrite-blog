import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
	const dispatch = useDispatch();
	const logoutHandler = () => {
		authService.logout().then(() => {
			dispatch(logout());
		});
	};
	return (
		<button
			onClick={logoutHandler}
			type="button"
			className="px-3 py-2 text-sm font-semibold text-white bg-black rounded-full shadow-sm hover:bg-black/80 "
		>
			Logout
		</button>
	);
}

export default LogoutBtn;
