import React, { useState } from "react";
import { Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
	const authStatus = useSelector((state) => state.auth.status);
	const navigate = useNavigate();

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const navItems = [
		{
			name: "Home",
			slug: "/",
			active: true,
		},
		{
			name: "Login",
			slug: "/login",
			active: !authStatus,
		},
		{
			name: "Signup",
			slug: "/signup",
			active: !authStatus,
		},
		{
			name: "All Posts",
			slug: "/all-posts",
			active: authStatus,
		},
		{
			name: "Add Post",
			slug: "/add-post",
			active: authStatus,
		},
	];

	return (
		<div className="relative w-full bg-gray-100 shadow-xl rounded-xl lg:rounded-full">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
				<div className="inline-flex items-center space-x-2">
					<span>
						<Link to="/">
							<Logo />
						</Link>
					</span>
				</div>
				<div className="hidden lg:block">
					<ul className="inline-flex space-x-8 items-center font-semibold">
						{navItems.map((item) =>
							item.active ? (
								<li key={item.name}>
									<button
										onClick={() => navigate(item.slug)}
										className="text-sm font-semibold text-gray-800 hover:text-gray-900"
									>
										{item.name}
									</button>
								</li>
							) : null
						)}
						{authStatus && (
							<li>
								<div className="hidden lg:block">
									<button type="button">
										<LogoutBtn />
									</button>
								</div>
							</li>
						)}
					</ul>
				</div>
				<div className="lg:hidden">
					<Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
				</div>
				{isMenuOpen && (
					<div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
						<div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
							<div className="px-5 pb-6 pt-5">
								<div className="flex items-center justify-between">
									<div className="inline-flex items-center space-x-2">
										<span>
											<Link to="/">
												<Logo />
											</Link>
										</span>
									</div>
									<div className="-mr-2">
										<button
											type="button"
											onClick={toggleMenu}
											className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 "
										>
											<span className="sr-only">Close menu</span>
											<X className="h-6 w-6" aria-hidden="true" />
										</button>
									</div>
								</div>
								<div className="mt-6">
									<nav className="grid gap-y-4">
										{navItems.map((item) =>
											item.active ? (
												<li
													onClick={() => navigate(item.slug)}
													key={item.name}
													href={item.href}
													className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
												>
													<span className="ml-3 text-base font-medium text-gray-900">
														{item.name}
													</span>
												</li>
											) : null
										)}
										{authStatus && (
											<a>
												<div>
													<button type="button">
														<LogoutBtn />
													</button>
												</div>
											</a>
										)}
									</nav>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Header;
