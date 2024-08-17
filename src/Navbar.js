import "./Navbar.css";
import { HiOutlineMail } from "react-icons/hi";
function Navbar() {
    return (
        <section className="navArea">
            <div className="nav-container">
                {/* nav left */}
                <nav className="left">
                    <a href="" className="one">Home</a>
                    <a href="" className="two">About Us</a>
                    <a href="" className="three">Human Rights</a>
                    <a href="" className="four">BP in UN Missions</a>
                    <a href="" className="five">Citizen Charter</a>
                    <a href="" className="six">Sacrifice in Action</a>
                    <a href="" className="seven">IGPs</a>
                    <a href="" className="eight">NOC & Notice</a>
                    <a href="" className="nine">POHS</a>
                    <a href="" className="ten">Units of PHQ</a>
                    <a href="" className="elaven">Circular</a>
                    <a href="" className="twelve">Contacts</a>
                </nav>
                {/* nav right */}
                <div className="right">
                <HiOutlineMail className="icon"/>
                </div>
            </div>
        </section>
    );
}

export default Navbar;