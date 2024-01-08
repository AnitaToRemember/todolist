import { NavLink } from "react-router-dom";
import logoImage from "../assets/logo.png"; 
import "../styles/components/Logo.css"

function Logo() {
  return (
    <section className="Logo">
      <NavLink to="/">
        <img src={logoImage} alt="Logo" />
      </NavLink>
    </section>
  );
}

export default Logo;

