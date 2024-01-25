import { useEffect, useState } from "react";
import { Col, Container,Row } from "react-bootstrap";
import headerImg from "../assets/img/headerImg.jpg";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Banner =()=>{
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "UI/UX Designer", "C++ Programmer"];
    const [delta, setDelta] = useState(300-Math.random()*100);
    const [text, setText] = useState('');
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta);

        return ()=>{clearInterval(ticker)};
    },[text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);
        setText(updatedText);

        if(isDeleting)
        {
            setDelta(prevDelta=>prevDelta/2);
        }
        if(!isDeleting&&updatedText===fullText)
        {
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText==='')
        {
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(300);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{`Hi! I am Ridham Jindal `}<span className="wrap">{text}</span></h1>
                                <p>Enthusiastic and adaptable Software Developer with a strong foundation in full-stack development, proficient in both frontend and backend technologies. Adept at crafting clean and efficient code. Skilled in C++ and Python programming languages, with a keen eye for detail and a commitment to producing high-quality software solutions</p>
                                <button onClick={()=>console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                <img src={headerImg} alt="Header Img" width="auto" height="600px"/>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}