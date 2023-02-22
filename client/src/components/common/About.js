import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavHomepage from '../common/NavHomepage'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Footer from './Footer'

const About = () => {

  return (
    <>
      <Container fluid sticky="top" className="nav-container-pages">
        <NavHomepage />
      </Container>



      
      <Breadcrumb className="show-drink-breadcrumb">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>About</Breadcrumb.Item>
      </Breadcrumb>
      <Container className="about-page">
        {/* <Row>
          <Col className="about-title">About this project</Col>
        </Row> */}
        <Row>
          <Col className="about-copy">
            <>
              <p>Hi! 👋  I am Imarn, student in Georgia Tech Bootcamp.
                <br/>
                <br/>
              This group project had I build a Full-Stack React app in 10 days, utalising stuff I learned in the course, experience solo work, and I anjoyed it alot!
              </p>
            </>
          </Col>
        </Row>
        <Row className="information">
          <Col className="names">
            <Row className="subtitle">My Team</Row>
            <Row className="bex">
              <a href="https://github.com/imran7rassi" rel="noreferrer"target="_blank"><i className="fab fa-github"></i> Imran Rasi</a>
            </Row>
          </Col>
          <Col className="project">
            <Row className="subtitle">Technologies Used:</Row>
            <Row>
              <ul>
                <li>JavaScript ES6</li>
                <li>HTML5</li>
                <li>SCSS</li>
                <li>React Bootstrap CSS Framework</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Express</li>
                <li>React</li>
                <li>Node</li>
                <li>Bcrypt</li>
                <li>JWT</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Trello</li>
                <li>Figma</li>
              </ul>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )

}

export default About 