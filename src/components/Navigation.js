//import logo from './logo.svg';
//import './HeaderPortfolio.css';
import React, { useState, useEffect } from 'react';
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";



function NavigationPortfolio() {
  
    return (
      <Navbar isBordered>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            Diana Santacruz
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">About Me</Navbar.Link>
          <Navbar.Link isActive href="#">Projects</Navbar.Link>
          <Navbar.Link href="#">Resume</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Content>
      </Navbar>
    );
  }
  
  export default NavigationPortfolio;