import { Route, Routes } from "react-router-dom";
import { PageBase } from ".";
import { SiteName } from "../Config";


const MainRouter = (props) => {

	const { navRoutes = [] } = props;
	return (
		<Routes >
			{
				navRoutes.map((value, index) => {
					const title = value.text;
					return (
						<Route
							caseSensitive={false}
							path={value.route}
							element={
								<PageBase
									title={`${title.toString()} - ${SiteName}`}>
									<value.component title={value.display} />
								</PageBase>
							}
							key={index} />
					);
				})
			}
		</Routes>
	);
};

export default MainRouter;
