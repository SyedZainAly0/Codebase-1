import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div style={styles.container}>
      
      <Navbar />
      <div style={styles.content}><Outlet /></div>
      <Footer />

    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  content: {
    flex: 1,
    padding: "20px"
  }
};

export default MainLayout;