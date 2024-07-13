import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="py-16 bg-veryDarkViolet">
			<div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
				<Image src={"/logo.svg"} width={121} height={33} alt="logo" />
				<div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
					<div className="flex flex-col items-center w-full md:items-start">
						<div className="mb-5 font-bold text-white capitalize">Features</div>
						<div className="flex flex-col items-center space-y-3 md:items-start">
							<Link
								href={""}
								className="capitalize text-grayishViolet hover:text-cyan"
							>
								Link shortening
							</Link>
							<Link
								href={""}
								className="capitalize text-grayishViolet hover:text-cyan"
							>
								Branded links{" "}
							</Link>
							<Link
								href={""}
								className="capitalize text-grayishViolet hover:text-cyan"
							>
								Analytics{" "}
							</Link>
						</div>
					</div>
					<div className="flex flex-col items-center w-full md:items-start">
						<div className="mb-5 font-bold text-white capitalize">
							Resources
						</div>
						<div className="flex flex-col items-center space-y-3 md:items-start">
							<Link
								href={""}
								className="capitalize text-grayishViolet hover:text-cyan"
							>
								Blog
							</Link>
							<Link
								href={""}
								className="capitalize text-grayishViolet hover:text-cyan"
							>
								Developers{" "}
							</Link>
							<Link
								href={""}
								className="capitalize text-grayishViolet hover:text-cyan"
							>
								Support{" "}
							</Link>
						</div>
					</div>
					<div className="flex flex-col items-center w-full md:items-start">
						<div className="mb-5 font-bold text-white capitalize">Company</div>
						<div className="flex flex-col items-center space-y-3 md:items-start">
							<Link
								href={""}
								className="capitalize text-grayishViolet hover:text-cyan"
							>
								About
							</Link>
							<Link
								href={""}
								className="capitalize text-grayishViolet hover:text-cyan"
							>
								Our Team{" "}
							</Link>
							<Link
								href={""}
								className="capitalize text-grayishViolet hover:text-cyan"
							>
								Careers{" "}
							</Link>
							<Link
								href={""}
								className="capitalize text-grayishViolet hover:text-cyan"
							>
								Contact{" "}
							</Link>
						</div>
					</div>
				</div>
				<div className="flex space-x-6">
					<Link href={""}>
						<Image src={"/icon-facebook.svg"} width={24} height={24} alt="fb" />
					</Link>
					<Link href={""}>
						<Image
							src={"/icon-instagram.svg"}
							width={24}
							height={24}
							alt="IG"
						/>
					</Link>
					<Link href={""}>
						<Image
							src={"/icon-pinterest.svg"}
							width={24}
							height={24}
							alt="PT"
						/>
					</Link>
					<Link href={""}>
						<Image
							src={"/icon-twitter.svg"}
							width={24}
							height={24}
							alt="twitter"
						/>
					</Link>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
