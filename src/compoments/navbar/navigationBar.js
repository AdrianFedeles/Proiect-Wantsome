import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
import "../../styling/navigationStyle.css";
import {
  Navbar,
  Nav,
  Container,
} from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import {withTranslation} from "react-i18next";
import DropdownButton from 'react-bootstrap/DropdownButton';

import Dropdown from 'react-bootstrap/Dropdown'






function LanguageSelector(){
const[titles,setTitle]=useState(<img className="selectImage" src="https://www.countryflags.io/ro/flat/64.png" alt="ro" width="30px"></img>)
    const {t, i18n} = useTranslation('common');


    function changeLanguages(e){
      i18n.changeLanguage(e.target.attributes[0].value)
    e.target.attributes[0].value ==="ro" ? setTitle(<img className="selectImage" src="https://www.countryflags.io/ro/flat/64.png" alt="ro" width="30px"></img>) :setTitle(<img className="selectImage" src="https://www.countryflags.io/us/flat/64.png" alt="en" width="30px"></img>)
    }

  return <div style={{float:"right",display: "flex",padding:"0 0.5rem",margin:"auto 0"}}>
    <DropdownButton
alignRight
title={titles}
id="dropdown-menu-align-right"
  >
        <Dropdown.Item eventKey="option-1" value="ro" onClick={changeLanguages}><img value="ro" className="selectImage" src="https://www.countryflags.io/ro/flat/64.png" alt="ro" width="30px"></img></Dropdown.Item>
        <Dropdown.Item eventKey="option-2" value="en" onClick={changeLanguages}><img value="en" className="selectImage" src="https://www.countryflags.io/us/flat/64.png" alt="en" width="30px"></img></Dropdown.Item>
</DropdownButton>
    </div>
}

class IndexNavbar extends React.Component{
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      handleScroll = () => {
        if (window.scrollY > window.innerHeight-200) {
          document.querySelector(".navbar").className = "navbar navbar-expand-sm navbar-dark  fixed-top scroll";
        } else {
          document.querySelector(".navbar").className = "navbar navbar-expand-sm navbar-dark bg-transparent fixed-top";
        }};
    render(){
      const { t } = this.props;
 return (<div>
     <Navbar collapseOnSelect fixed="top" expand="sm" bg="transparent" variant="dark" width="100%">
<Container>
  <LanguageSelector/>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent:"space-evenly"}}>
        <Nav    >
            <Nav.Link href="/#home">{t("navigationBar.buttons.home")}</Nav.Link>
            <Nav.Link href="/#about">{t("navigationBar.buttons.about")}</Nav.Link>
            <Nav.Link href="/#services">{t("navigationBar.buttons.services")}</Nav.Link>
            <Nav.Link href="/#contact">{t("navigationBar.buttons.contact")}</Nav.Link>
        </Nav>
        
    </Navbar.Collapse>
</Container>

         </Navbar>
         </div>)}
}
const IndexNavBarTranslate=withTranslation('common')(IndexNavbar)
export default IndexNavBarTranslate;