import { Col, Container, Nav, Row, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/projImg1.jpg";
import projImg2 from "../assets/img/projImg2.jpg";
import projImg3 from "../assets/img/projImg3.jpg"
import projImg4 from "../assets/img/projImg4.jpeg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = ()=>{
    const projects = [
        {
            title: "Chat-App",
            description:"A real time messaging app",
            imgUrl:projImg1,
        },
        {
            title:"Quiz Platform",
            description:"Inter-IIT Tech Meet",
            imgUrl:projImg2,
        },
        {
            title:"E-Commerce",
            description:"A commercial website clone",
            imgUrl:projImg3,
        },
    ];
    const projects1 = [
        {
            title: "Fake News Detection",
            description:"Stay Updated but in a right way",
            imgUrl:projImg4,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                      <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">WebD</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Machine Learning</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">C++</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src = {colorSharp} alt="background"></img>
        </section>
    )
}