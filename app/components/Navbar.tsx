"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className="relative container mx-auto py-6">
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-20">
					<Link href={"/"}>
						<Image src={"/logo.svg"} alt="logo" width={133} height={21} />
					</Link>
					<div className="hidden lg:flex space-x-8 font-bold">
						<Link
							href={"#"}
							className="text-grayishViolet hover:text-darkViolet"
						>
							Features
						</Link>
						<Link
							href={"#"}
							className="text-grayishViolet hover:text-darkViolet"
						>
							Pricing
						</Link>
						<Link
							href={"#"}
							className="text-grayishViolet hover:text-darkViolet"
						>
							Resources
						</Link>
					</div>
				</div>
				<div className="hidden lg:flex items-center space-x-6 font-bold text-grayishViolet">
					<div>Login</div>
					<Link
						href={"#"}
						className="px-8 py-3 bg-cyan text-white rounded-full hover:opacity-70"
					>
						Sign up
					</Link>
				</div>
				<button
					id="menu-btn"
					className={`block hamburger lg:hidden focus:outline-none ${
						isOpen && "open"
					}`}
					type="button"
					onClick={() => setIsOpen((isOpen) => !isOpen)}
				>
					<span className={`hamburger-top ${isOpen && "open"}`}></span>
					<span className={`hamburger-middle ${isOpen && "open"}`}></span>
					<span className={`hamburger-bottom ${isOpen && "open"}`}></span>
				</button>
			</div>
			<div
				className={`absolute ${
					isOpen ? "block" : "hidden"
				} p-6 rounded-lg bg-darkViolet left-6 top-20 right-6 z-[100]`}
			>
				<div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
					<Link href="#" className="w-full text-center">
						Features
					</Link>
					<Link href="#" className="w-full text-center">
						Pricing
					</Link>
					<Link href="#" className="w-full text-center">
						Resources
					</Link>
					<Link
						href="#"
						className="w-full pt-6 border-t border-gray-400 text-center"
					>
						Login
					</Link>

					<Link
						href="#"
						className="w-full py-3 text-center rounded-full bg-cyan"
					>
						Sign Up
					</Link>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
