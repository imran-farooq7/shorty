import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<section>
			<div className="flex flex-col-reverse container mx-auto p-6 lg:flex-row">
				<div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
					<h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
						More than just shorter links
					</h1>
					<p className="text-2xl text-center text-gray-400 lg:text-left lg:max-w-md">
						Build your brand's recognition and get detailed insights on how your
						links are performing.
					</p>
					<div className="mx-auto lg:mx-0">
						<Link
							href={"#"}
							className="px-8 py-3 bg-cyan text-white rounded-full hover:opacity-70"
						>
							Get started
						</Link>
					</div>
				</div>
				<div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
					<Image
						src={"illustration-working.svg"}
						alt="working"
						width={733}
						height={482}
					/>
				</div>
			</div>
		</section>
	);
};
export default Hero;
