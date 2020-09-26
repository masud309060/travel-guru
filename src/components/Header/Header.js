import { Link } from "react-router-dom";
import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { travelContext } from "../../App";
import logo2 from "../../images/Logo-white.png";


const Header = () => {
  const {userLogin} = React.useContext(travelContext)
  const [loginUser] = userLogin;
  return (
    <div>
      <Navbar variant="dark">
        <Navbar.Brand>
          <img style={{height: "60px"}} src={logo2} alt="" />
        </Navbar.Brand>
        <Form inline>
          <FormControl
            type="text"
            placeholder=" Search your Destination..."
            className="mr-md-2 px-4"
            style={{ opacity: ".6" }}
          />
        </Form>
        <Nav className="ml-auto">
          
            <Nav.Link className="mr-3">
            <Link to="/news">News</Link>
            </Nav.Link>
          

          
            <Nav.Link className="mr-3">
            <Link to='/destination'>Destination</Link>
            </Nav.Link>
          

          
            <Nav.Link className="mr-3">
            <Link to="/blog">Blog</Link>
            </Nav.Link>
          

          
            <Nav.Link className="mr-3">
            <Link to="/contact">Contact</Link>
            </Nav.Link>
          
          {
            loginUser.loginSuccess ? <b className="align-items-center mt-2">{loginUser.name}</b> : 
            <Link to="/login"><Button variant="warning" className="px-4">
            Login
            </Button></Link>
          }
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
