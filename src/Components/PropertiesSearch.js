// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faRefresh } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { getPropertiesAsync } from "../Services/propertiesService";
import { PropertyCard } from "./";
// import { sessionContext } from '../context/sessionContext';
// import SubjectDialog from "./SubjectDialog";
// import { scheduleContext } from "../context/scheduleContext";

const PropertiesSearch = props => {

	// const { isLogged } = useContext(sessionContext);
	// const { subjects, setSubjects } = useContext(scheduleContext);
	const [properties, setProperties] = useState([]);
	// const [selectedSubject, setSelectedSubject] = useState({});

	const refreshProperties = async () => {

		const res = await getPropertiesAsync();
    console.log(res)
		if (res.ok) {
			setProperties(res.data);
		} else {
      setProperties([]);
    }
	};

	useEffect(  () => {
    refreshProperties();
	}, []);

	return (
		<main className="container">
			<div className="row mb-2">
				<div className="col-12 d-flex justify-content-end">
					{
  					<React.Fragment>
	  					<button
		  					className="btn btn-secondary mx-1"
								onClick={async () => await refreshProperties()}>
                Recargar
			  			</button>
							<button
								className="btn btn-primary mx-1"
								data-bs-toggle="modal"
								data-bs-target="#subjectDialog">
                Abrir Modal
							</button>
						</React.Fragment>
					}
				</div>
			</div>
			<div className="row">
				{ 
					properties.map((property) => {
						return (
							<div key={property.id} className="col-12 col-md-4 d-flex align-items-stretch">
								<PropertyCard
									property={property}
									/>
							</div>
						);
					})
			  }
			</div>
{ /* <SubjectDialog subject={selectedSubject} /> */ }
		</main>
	);
}

export default PropertiesSearch;

