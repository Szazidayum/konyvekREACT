import { Outlet, Link } from "react-router-dom";
import './App.css'

const Layout = () => {
    return (
        <>
            <nav className="layoutNav">
                <ul>
                    <li>
            {/* A publikus tartalom linkje */}
                        <Link to="/"><p>Könyváruház</p></Link>
                    </li>
                    <li>
            {/* Az admin oldal linkjetartalom linkje */}
                        <Link to="/admin"><p>Admin felület</p></Link>
                    </li>
                </ul>
            </nav>
            <article>
            {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
                <Outlet />
            </article>
        </>
    );
};

export default Layout;
