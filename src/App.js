import './App.css';
import { NavMenu, Footer } from './Components';
import { MainRouter } from './Utilities';
import { Fragment } from 'react';
import NavRoutes from './Config/NavRoutes';
import { useScrollToTop } from './Hooks';

const App = () => {
  return (
    <Fragment>
      <NavMenu navRoutes={NavRoutes} />
      {useScrollToTop()}
      <MainRouter navRoutes={NavRoutes} />
      <Footer />
    </Fragment>
  );
}

export default App;
