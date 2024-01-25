import { Container,Row,Col } from "react-bootstrap"
import logo from "../assets/img/logo.png"
import navIcon1 from '../assets/img/navIcon1.png';
import navIcon2 from '../assets/img/navIcon2.png';
import navIcon3 from '../assets/img/navIcon3.png';
import { MailchimpForm } from "./MailchimpForm";


export const Footer = () =>{
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm/>
                    <Col sm={6}>
                        <img src ={logo} alt ="logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href='https://github.com/Ridham-Jindal'><img src = {navIcon1} alt="github"/></a>
                            <a href='https://www.linkedin.com/in/ridham-jindal-06283a279/'><img src = {navIcon2} alt="linkedin"/></a>
                            <a href='https://leetcode.com/Jindal-Ridham/'><img src = {navIcon3} alt="icon"/></a>

                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}