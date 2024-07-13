import Image from "next/image";

interface Props {
	title: string;
	description: string;
	img: string;
}
const FeatureItem = ({ description, img, title }: Props) => {
	return (
		<div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
			<div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
				<div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
					<Image src={img} alt={title} width={40} height={40} />
				</div>
			</div>
			<h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
				{title}{" "}
			</h5>
			<p className="text-center text-gray-400 md:text-left">{description}</p>
		</div>
	);
};
export default FeatureItem;
