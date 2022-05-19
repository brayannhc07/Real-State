import { Fragment } from "react";
import { PropertiesSearch } from '../Components/';
// import { PropertyCard } from "../Components";
// import { ContactDemo, HomeMainArticle } from '../Articles';

const PropertiesPage = props => {
	return (
		<Fragment>
			<main className="section container mid-container">
				{/* <HomeMainArticle /> */}
        
        <PropertiesSearch />
      </main>
		</Fragment>
	);
};

export default PropertiesPage;
