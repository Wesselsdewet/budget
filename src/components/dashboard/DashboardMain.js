import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";

function DashboardMain() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h4>Budget Overview</h4>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Card className="text-center bg-primary dark-cards">
              <Card.Header>Monthly Income Overview</Card.Header>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th className="id-column">#</th>
                      <th className="stream-column">Stream</th>
                      <th className="amount-column">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="id-column">1</td>
                      <td className="stream-column">Matogen</td>
                      <td className="amount-column">R 17 420.00</td>
                    </tr>
                    <tr>
                      <td className="id-column">2</td>
                      <td className="stream-column">Hexadel</td>
                      <td className="amount-column">R 100.00</td>
                    </tr>
                    <tr>
                      <td className="id-column">3</td>
                      <td className="stream-column">Savings</td>
                      <td className="amount-column">R 4 500.00</td>
                    </tr>
                    <tr>
                      <td className="id-column">4</td>
                      <td className="stream-column">Other Income</td>
                      <td className="amount-column">R 0.00</td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="total-column">
                        Total
                      </td>
                      <td className="total-amount-column">R 22 020.00</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
              <Card.Footer className="">
                <Button
                  variant="secondary"
                  onClick={() => {
                    console.log("clicked");
                  }}
                  className="w-100"
                >
                  Income Dashboard
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={6}>
            <Card className="text-center bg-primary dark-cards">
              <Card.Header>Monthly Expences Overview</Card.Header>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th className="id-column">#</th>
                      <th className="stream-column">Expence</th>
                      <th className="amount-column">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="id-column">1</td>
                      <td className="stream-column type-indicator rent">Rent + W/L</td>
                      <td className="amount-column">R 5 600.00</td>
                    </tr>
                    <tr>
                      <td className="id-column">2</td>
                      <td className="stream-column type-indicator basic">Basic Expences</td>
                      <td className="amount-column">R 4 410.00</td>
                    </tr>
                    <tr>
                      <td className="id-column">3</td>
                      <td className="stream-column type-indicator subs">Subscriptions</td>
                      <td className="amount-column">R 440.00</td>
                    </tr>
                    <tr>
                      <td className="id-column">4</td>
                      <td className="stream-column type-indicator dept">Dept Payments</td>
                      <td className="amount-column">R 3200.00</td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="total-column">
                        Total
                      </td>
                      <td className="total-amount-column">R 8 050.00</td>
                    </tr>
                  </tbody>
                </Table>
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
    </>
  );
}

export default DashboardMain;
