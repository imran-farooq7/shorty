import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="relative container mx-auto p-6">
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
			</div>
		</nav>
	);
};
export default Navbar;
