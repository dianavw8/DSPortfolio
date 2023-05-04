import React, { useState, useEffect } from 'react';
import { Navbar, Text, } from "@nextui-org/react";
import { Link } from 'react-router-dom';



function NavigationPortfolio() {
  
    return (
      <Navbar isBordered variant={"sticky"} activeColor={"secondary"} activeVariant={"highlight-solid-rounded"}> 
      {/* added activeColor and activeVariant but no change in display. */}
        <Navbar.Brand>
          <Text b color="$pink500" fontSizes="1.125rem" hideIn="md">
            Diana Santacruz
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
        <Link to="/">
          <Navbar.Link>About Me</Navbar.Link>
        </Link>
        <Link to="/projects">
          <Navbar.Link id="projects">Projects</Navbar.Link>
        </Link>
        <Link to="/resume">
          <Navbar.Link>Resume</Navbar.Link>
        </Link>
        <Link to="/contact">
          <Navbar.Link>Contact</Navbar.Link>
        </Link>
        </Navbar.Content>
      </Navbar>
    );
  }
  
  export default NavigationPortfolio;