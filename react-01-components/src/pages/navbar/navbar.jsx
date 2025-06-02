import { Link } from "react-router-dom";


/*
 El componente Link permite a los usuarios moverse entre
 las diferentes "páginas" de la aplicación pero evita
 recargas completas, preservando el estado de la aplicación.
*/

const Navbar = ({ title }) => {
    return (
        <nav>
            <h1>{title}</h1>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/products">Productos</Link></li>
                <li>Contacto</li>
                <li> About Us</li>
                <li> Contact Us</li>
                <li> Register</li>
            </ul>
        </nav>
    );
};

export { Navbar };