import Header from "../components/Header/index";
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header/>
      
      <div className="page-wrapper" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
        <Outlet/>
      </div>

    </>
  );
};

export default Layout;
