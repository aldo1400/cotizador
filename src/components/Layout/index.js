import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Information from '../Information';
import 'styles/footer.scss';

function Layout({ children }) {
    const location = useLocation();

    return (
        <div className="container">
            {location.pathname === '/' ? <Information /> : <Sidebar />}
            <div className="main--container">
                {children}
            </div>
            <div className="footer mobile">
                <p>© 2020 RIMAC Seguros y Reaseguros</p>
            </div>
        </div>
    );
}


export default Layout;