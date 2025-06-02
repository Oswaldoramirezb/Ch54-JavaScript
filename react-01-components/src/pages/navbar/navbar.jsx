const Navbar = ({ title }) => {
    return (
        <nav>
            <h1>{title}</h1>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    );
};

export { Navbar };