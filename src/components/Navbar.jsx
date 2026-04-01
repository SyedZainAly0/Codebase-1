import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyApp</h2>

      <div>
        <Link
          to="/"
          style={{
            ...styles.link,
            ...(location.pathname === "/" && styles.active)
          }}
        >
          Home
        </Link>

        <Link
          to="/about"
          style={{
            ...styles.link,
            ...(location.pathname === "/about" && styles.active)
          }}
        >
          About
        </Link>

        <Link
          to="/contact"
          style={{
            ...styles.link,
            ...(location.pathname === "/contact" && styles.active)
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    backgroundColor: "#1e1e2f",
    color: "white"
  },
  logo: {
    margin: 0
  },
  link: {
    margin: "0 10px",
    color: "white",
    textDecoration: "none",
    padding: "5px 10px",
    borderRadius: "5px"
  },
  active: {
    backgroundColor: "#007bff"
  }
};

export default Navbar;