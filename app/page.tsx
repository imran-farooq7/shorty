import Hero from "./components/Hero";
import LinkForm from "./components/LinkForm";
import LinksList from "./components/LinksList";
import Stats from "./components/Stats";

const Home = () => {
	return (
		<div>
			<Hero />
			<LinkForm />
			<LinksList />
			<Stats />
		</div>
	);
};
export default Home;
