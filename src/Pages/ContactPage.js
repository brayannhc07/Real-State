import { Fragment } from "react";
import { Header } from "../Components";
// import { ContactDemo, HomeMainArticle } from '../Articles';

const ContactPage = (props) => {
	return (
		<Fragment>
			<Header backgroundImage="assets/img/showcases/home-page/home-page-header.jpg">
				<h1>
					ContactPage
				</h1>
				<p className="h4">
					Página de Contacto
				</p>
			</Header>
			<main className="section container mid-container">
				{/* <HomeMainArticle /> */}
			</main>
		</Fragment>
	);
};

export default ContactPage;
