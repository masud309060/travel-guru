import { Link } from "react-router-dom";
import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { travelContext } from "../../App";
import logo from "../../images/Logo.png";


const HeaderD = (props) => {
  const {userLogin} = React.useContext(travelContext)
  const [loginUser] = userLogin;

  return (
    <div>
      <Navbar variant="dark">
        <Navbar.Brand>
          <img style={{height: "60px"}} src={logo} alt="" />
        </Navbar.Brand>
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
          {
            loginUser.loginSuccess &&
            <Link to="/login"><Button onClick={props.handleSignOut} variant="warning" className="px-4 ml-3">
            Log Out
            </Button></Link>
          }

        </Nav>
      </Navbar>
    </div>
  );
};

export default HeaderD;
