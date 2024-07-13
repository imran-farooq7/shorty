import FeatureItem from "./FeatureItem";

const Features = () => {
	return (
		<section className="pb-32 bg-gray-100">
			<div className="relative container flex flex-col space-y-18 items-start px-6 mx-auto md:flex-row md:space-x-7 md:space-y-0">
				<div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block"></div>
				<div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>
				<FeatureItem
					title="Brand Recognition"
					description="Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content."
					img="/icon-brand-recognition.svg"
				/>
				<FeatureItem
					title="Detailed records"
					description="Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions."
					img="/icon-detailed-records.svg"
				/>
				<FeatureItem
					title="Fully customizable"
					description="Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement."
					img="/icon-fully-customizable.svg"
				/>
			</div>
		</section>
	);
};
export default Features;
