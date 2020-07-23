import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import { BsFillHouseDoorFill } from "react-icons/bs";
import ModalPosts from "./ModalPosts";

const MyNavbar = ({ getInfos }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <NavbarText style={{ marginRight: "5vw", color: "#e74c3c" }}>
        SOCIAL BUSHIDO
      </NavbarText>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link to="/">
              <BsFillHouseDoorFill size="2vw" />
            </Link>
          </NavItem>
          <NavItem style={{ marginRight: "35vw", marginLeft: "30vw" }}>
            <ModalPosts getInfos={getInfos} />
          </NavItem>
          <NavItem>
            <Link to="/messages">
              <BsFillChatSquareDotsFill size="2vw" />
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MyNavbar;
