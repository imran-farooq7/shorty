import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
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
			<Features />
			<CTA />
			<Footer />
		</div>
	);
};
export default Home;
