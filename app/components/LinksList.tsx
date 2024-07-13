import { getTinyUrls } from "../actions/actions";
import LinkItem from "./LinkItem";
interface Link {
	id: number;
	alias: string;
	shorturl: string;
	longurl: string;
	clicks: number;
	title: string;
}
const LinksList = async () => {
	const links = (await getTinyUrls()) as Link[];

	return (
		<section className="bg-gray-100">
			<div className="max-w-4xl mx-auto p-6 space-y-6 ">
				{links ? (
					links?.map((link) => (
						<LinkItem
							url={link.longurl}
							shortenUrl={link.shorturl}
							key={link.id}
						/>
					))
				) : (
					<h2>No Links found</h2>
				)}
			</div>
		</section>
	);
};
export default LinksList;
