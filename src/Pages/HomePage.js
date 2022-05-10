import { Fragment } from "react";
import { Header } from "../Components";
// import { ContactDemo, HomeMainArticle } from '../Articles';

const HomePage = (props) => {
	return (
		<Fragment>
			<Header backgroundImage="assets/img/showcases/home-page/home-page-header.jpg">
				<h1>
					Invierte inteligente, invierte en tu futuro
				</h1>
				<p className="h4">
					Invierte en materia de propiedades, conoce nuestros planes financieros y casas
				</p>
			</Header>
			<main className="section container mid-container">
				{/* <HomeMainArticle /> */}
			</main>
		</Fragment>
	);
};

export default HomePage;
