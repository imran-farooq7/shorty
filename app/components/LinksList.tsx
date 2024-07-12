import { getTinyUrls } from "../actions/actions";
import LinkItem from "./LinkItem";
interface Link {
	domain: string;
	alias: string;
	deleted: boolean;
	archived: boolean;
	analytics: [Object];
	tags: [];
	created_at: string;
	expires_at: null;
	tiny_url: string;
}

const LinksList = async () => {
	const links = (await getTinyUrls()) as Link[];

	return (
		<section className="bg-gray-100">
			<div className="max-w-4xl mx-auto p-6 space-y-6 ">
				{links.map((link) => (
					<LinkItem
						url={link.domain}
						shortenUrl={link.tiny_url}
						key={link.alias}
					/>
				))}
			</div>
		</section>
	);
};
export default LinksList;
