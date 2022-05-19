import { AboutPage, HomePage, NotFoundPage, PropertiesPage } from "../Pages";

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
		display: "Acerca de",
		text: "Acerca de",
		route: "/acerca-de",
		component: AboutPage,
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
