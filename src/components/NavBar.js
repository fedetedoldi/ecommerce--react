import CartWidget from "./CartWidget";


const NavBar = () => {
    const brand = "https://img2.freepng.es/20180408/uqe/kisspng-logo-e-commerce-electronic-business-ecommerce-5aca8121ed83b3.3986831415232207699729.jpg";
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={brand} alt="Logo" width="50" height="35"/>
                </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Contacto</a>
                            </li>
                        </ul>
                        <CartWidget/>
                    </div>
                </div>
        </nav>
    </div>
    )
}

export default NavBar;