import { Container, Row, Col, Image, Table, Card  } from "react-bootstrap"

export default function Home() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Image
              src="/fish.jpg"
              alt="Batoids at Aquarium toronto"
              height = "500"
              />
          </Col>
          <Col>
            <br/>
            <h1>About this site</h1>
            <br/>
            <p>
              Welcome to my website! As a computer programming student, I' a'm passionate about technology and always striving to improve my skills. 
              This website serves as a showcase for my academic projects and serves as a platform for me to connect with potential employers.
            </p>
            <p>
              I'm currently seeking a developer position. You'll find detailed information about my academic projects, including the technologies used and the problems he solved. 
              Additionally, my resume is available for download, providing more details about his education, experience, and skills.
            </p>
          </Col>
        </Row>
        <br/><br/><br/>

        <Row>
          <h1>Who is Jenson?</h1>
        </Row>
        <br/>
        <Row>
          <Col md={6}>
            <p>My name is Cheuk Lung Li and I'm a computer programming student. 
                I recently completed a bachelor's degree in economics in Hong Kong, 
                but my passion lies in technology and software development.</p> 
            <p>When I'm not coding, I love to listen to music - especially Rock and roll - and play basketball. 
                My favorite NBA team is the Dallas Mavericks. 
                I also have a keen interest in trading stocks and continuously endeavor to learn more about it.</p> 
          </Col>
          <Col md={1}></Col>
          <Col>
            <Table striped hover>
              <tbody>
                <tr>
                  <td>Sex</td>
                  <td>Male</td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>27</td>
                </tr>
                <tr>
                  <td>Language</td>
                  <td>English, Cantonese & Mandarin</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>Toronto, CA  ||  Hong Kong</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <br/><br/>
        <Row>          
          <div className="quote-container">
            <blockquote class="quote-text">
              The future as much as I do. Do the work, own my failures and I will own my success. 
            </blockquote>
            <p>— Mark Minervini</p>
          </div>
        </Row>
        <br/><br/><br/>

        <br/>
        <Row><h1>Education</h1></Row>
        <br/>
        <Row>
          <Col>
            <Card style={{ width: '18rem'}} className="mx-auto">
              <Card.Img variant="top" src="/programming.png" margin={5}/>
              <Card.Body>
                <Card.Title>Seneca College</Card.Title>
                <Card.Subtitle ><a href="https://www.senecacollege.ca/programs/fulltime/CPA.html">Computer Programming & Analysis</a></Card.Subtitle>
                <Card.Text>
                2022 - 2023
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem'}} className="mx-auto my-2">
              <Card.Img variant="top" src="/economic.png"/>
              <Card.Body>
                <Card.Title>The Open University of Hong Kong</Card.Title>
                <Card.Subtitle ><a href="https://www.hkmu.edu.hk/as/programmes-courses/distance-learning/bssche/">Honours Bachelor of Social Science in Economics</a></Card.Subtitle >
                <Card.Text>
                2014 - 2018
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  )
}
