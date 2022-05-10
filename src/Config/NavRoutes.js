import { ContactPage, HomePage, NotFoundPage, PropertiesPage } from "../Pages";

const NavRoutes = [
	{
		display: "Inicio",
		text: "Inicio",
		route: "/",
		component: HomePage,
		show: true,
		showBottom: true
	},
	{
		display: "Propiedades",
		text: "Propiedades",
		route: "/propiedades",
		component: PropertiesPage,
		show: true
	},
	{
		display: "Contacto",
		text: "Contacto",
		route: "/contacto",
		component: ContactPage,
		show: true
	},
	{
		display: "Página No Encontrada",
		text: "Página No Encontrada",
		route: "*",
		component: NotFoundPage,
		show: false,
	}
];

export default NavRoutes;
