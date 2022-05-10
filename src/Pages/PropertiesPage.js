import { Fragment } from "react";
import { Header } from "../Components";
// import { ContactDemo, HomeMainArticle } from '../Articles';

const PropertiesPage = (props) => {
	return (
		<Fragment>
			<Header backgroundImage="assets/img/showcases/home-page/home-page-header.jpg">
				<h1>
					PropertiesPage
				</h1>
				<p className="h4">
					Página de Propiedades
				</p>
			</Header>
			<main className="section container mid-container">
				{/* <HomeMainArticle /> */}
			</main>
		</Fragment>
	);
};

export default PropertiesPage;
