import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container,Row,Col} from "react-bootstrap";
import c1 from "../assets/img/c1.png";
import css from "../assets/img/css.png";
import database from "../assets/img/database.png";
import html from "../assets/img/html.png";
import python from "../assets/img/python.png";
import science from "../assets/img/science.png";
import colorSharp from "../assets/img/color-sharp.png"
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from "react";

export const Skills = ()=>{
    const responsive = 
    {
        superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
        },
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
        },
        tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
        }
    };

    const [animate,setAnimate] = useState(false);

    const handleScroll = () => {
        setAnimate(true);
    };
    return (
        <section className="skill" id ="skills">
            <Container>
                <Row>
                    <Col>
                        <ScrollTrigger onScroll={handleScroll}>
                            <div className="skill-bx wow zoomIn" >
                                <h2 className={`skills-section ${animate ? 'animate' : ''}`}>
                                    Skills
                                </h2>
                                <p>Software Developer</p>
                                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider" autoPlay={true} interval={10} >
                                    <div className="item">
                                        <img src={c1} alt ="C++"/>
                                        <h5>C++</h5>
                                    </div>
                                    <div className="item">
                                        <img src={css} alt ="CSS"/>
                                        <h5>CSS</h5>
                                    </div>
                                    <div className="item">
                                        <img src={database} alt ="DB"/>
                                        <h5>MongoDB</h5>
                                    </div>
                                    <div className="item">
                                        <img src={html} alt ="HTML"/>
                                        <h5>HTML</h5>
                                    </div>
                                    <div className="item">
                                        <img src={python} alt ="python"/>
                                        <h5>Python</h5>
                                    </div>
                                    <div className="item">
                                        <img src={science} alt ="React"/>
                                        <h5>React</h5>
                                    </div>
                                </Carousel>
                            </div>
                        </ScrollTrigger>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="sh"/>
        </section>
    )
}