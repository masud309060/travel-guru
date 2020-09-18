import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { travelContext } from "../../App";
import logo from "../../images/Logo.png";


const HeaderD = () => {
  const {userLogin} = React.useContext(travelContext);
  const [loginUser] = userLogin;
  // console.log(loginUser)

  return (
    <div>
      <Navbar variant="light">
        <Navbar.Brand>
          <img style={{height: "60px"}} src={logo} alt="" />
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
          
            <Nav.Link className="mr-3" href="#">
            <Link to='/news'> News</Link>
            </Nav.Link>
          

          
            <Nav.Link className="mr-3" href="#">
            <Link to="/destination">Destination </Link>
            </Nav.Link>
         

       
            <Nav.Link className="mr-3" href="#">
            <Link to="/blog">Blog </Link>
            </Nav.Link>
         

    
            <Nav.Link className="mr-3" href="#">
              <Link to='/contact'>Contact</Link>
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

export default HeaderD;
