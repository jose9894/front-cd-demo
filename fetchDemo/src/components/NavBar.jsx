import { Link } from "react-router-dom";
import '../styles/pagestyles.css'
import Balance from "./Pages/Balance";

function NavBar()
{
    return (
    <div className="nav-container">
        <Link to="/"> Home </Link>
        <Link to="/City"> Login </Link>
        <Link to="/Country"> Admin </Link>
        <Link to="/Geo"> User </Link>
        <Balance/>
    </div>
);
}

export default NavBar
