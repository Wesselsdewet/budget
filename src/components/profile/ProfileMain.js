import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function ProfileMain() {
  const now = new Date();
  const dateString = now.toLocaleDateString();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Card className="bg-primary dark-cards">
            <Card.Header>
              <Row>
                <Col sm={10}>
                  <h4>Welsome back Wessels!</h4>
                </Col>
                <Col sm={2} className="text-end">
                  <p className="mb-0">{dateString}</p>
                  <p className="mb-0">{time.toLocaleTimeString()}</p>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
            </Card.Body>
            <Card.Footer className="">
              <Button
                variant="secondary"
                onClick={() => {
                  console.log("clicked");
                }}
                className="w-100"
              >
                Expences Dashboard
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfileMain;
