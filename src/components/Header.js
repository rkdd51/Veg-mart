import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

export default function header() {
  const navLinkStyle = { color: "white" };

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        style={{ textAlign: "center" }}
      >
        <Navbar.Brand href="#home" className="ml-2">
          {" "}
          <img
            className="mr-2"
            src={process.env.PUBLIC_URL + "data:image/jpeg;base64,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"}
            alt="Second slide"
            style={{ height: "30px", width: "30px" }}
          />


          Veg Mart
        </Navbar.Brand>


        <Nav>
          <Nav.Item className="nav-style">
            <i
              className="fa fa-plus"
              style={{ fontSize: "40px", color: "red" }}
            ></i>
          </Nav.Item>
        </Nav>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-4" variant="light">
            <Nav.Link>
              <Link style={navLinkStyle} to="/">
                <i
                  className="fa fa-home mr-1"
                  style={{ fontSize: "17px", color: "white" }}
                ></i>
                Home
              </Link>
            </Nav.Link>



            <Nav.Link>
              <Link style={navLinkStyle}  to="/veggie">
                <i
                  className="fa fa-user-md mr-1"
                  style={{ fontSize: "17px", color: "white" }}
                ></i>
                Veggie
              </Link>
            </Nav.Link>


            <Nav.Link>
              <i
                className="fa fa-sign-in mr-1"
                style={{ fontSize: "17px", color: "white" }}
              ></i>
              <Link style={navLinkStyle} href="#2" to="/signin" >
                Login/Register
              </Link>
            </Nav.Link>


            <Nav.Link>
              <Link style={navLinkStyle} to="/about">
                <i
                  className="fa fa-users mr-1"
                  style={{ fontSize: "17px", color: "white" }}
                ></i>
                AboutUs

              </Link>
             
            </Nav.Link>
            


            <Nav.Link>
              <Link style={navLinkStyle} to="/contact">
                <i
                  className="fa fa-envelope mr-1"
                  style={{ fontSize: "17px", color: "white" }}
                ></i>
                Contact-Us
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link style={navLinkStyle}  to="/feedback">
                <i
                  className="fa fa-user-md mr-1"
                  style={{ fontSize: "17px", color: "white" }}
                ></i>
                Feedback
              </Link>
            </Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
