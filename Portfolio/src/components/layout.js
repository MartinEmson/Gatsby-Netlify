import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import NavBar from "./NavBar";
import Footer from "./Footer";


const Layout = ({ children }) => (
  <>
    <NavBar />
    {/* <header><Link to="/">Gatsby ITHS-starter</Link></header> */}
    <main>{children}</main>
    <Footer />
  </>
)


export default Layout;
