import { Link } from "react-router-dom";

export default function Header() {

    return (
        <header className="header_section">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container">
                    <Link className="navbar-brand" to="index.html">
                        <img src="images/logo.png" alt="" />
                    </Link>
                    <div className="" id="">
                        <div className="User_option">
                            <form className="form-inline my-2  mb-3 mb-lg-0">
                                <input type="search" placeholder="Search" />
                                <button className="btn   my-sm-0 nav_search-btn" type="submit" />
                            </form>
                        </div>
                        {/* <div className="custom_menu-btn">
                            <button onlick="openNav()">
                                <span className="s-1"></span>
                                <span className="s-2"></span>
                                <span className="s-3"></span>
                            </button>
                        </div>   className="overlay" */}
                        <div id="myNav">
                            <div className="overlay-content">
                                <Link to="/">Home</Link>
                                <Link to="/articles">Articles</Link>
                                <Link to="/register">Register</Link>
                                <Link to="/login">Login</Link>
                                <Link to="/logout">Logout</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}