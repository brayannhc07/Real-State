import { Link } from "react-router-dom";
import { SiteName } from "../Config";

const NavBottom = () => {
	return (
		<section className="container">
			<div className="row text-center d-flex justify-content-between align-items-center">
				<nav className="col-12 col-md-4 my-2">
					<Link className="btn btn-link" to="/">
						Inicio
					</Link>
				</nav>
				<div className="col-12 col-md-4 my-2 copyright">
					&copy; 2022, {SiteName}, S.C
				</div>
			</div>
		</section>
	);
};

export default NavBottom;

