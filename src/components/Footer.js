import { Link, useLocation } from "react-router-dom";

function Footer() {
    const location = useLocation()
    return (
        <footer className=" d-flex justify-content-center flex">
            <div className="d-flex flex-column align-items-center mb-3">
                <h5>Copyright &copy; 2021</h5>
                {location.pathname === '/' && <Link to="/about">About</Link>}
            </div>
        </footer>
    )
}

export default Footer
