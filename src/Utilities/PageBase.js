import { useEffect } from "react";

const PageBase = (props) => {
	useEffect(() => {
		document.title = props.title || "";
	}, [props.title]);
	return props.children;
};

export default PageBase;
