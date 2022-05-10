import { Link } from "react-router-dom";
import { Fragment } from "react";

const NotFoundPage = () => {
	return (
		<Fragment>
			<main className="container section">
				<div className="container mid-container">
					<div className="row">
						<div className="col">
							<p className="display-3">
								Página No Encontrada
							</p>
							<p className="lead">
								La página que estás buscando no existe o no está disponible.
							</p>
							<Link to="/" className="btn btn-success btn-fill">
								Volver a la Página de Inicio
							</Link>
						</div>
					</div>
				</div>
			</main>
		</Fragment>
	);
};

export default NotFoundPage;
