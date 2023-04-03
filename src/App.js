import logo from "./logo.svg";
import "./App.scss";
import { Col, Container, Form, Nav, Row, Tab } from "react-bootstrap";
import DashboardMain from "./components/dashboard/DashboardMain";
import { PersonVcard, Speedometer, Wallet, Wallet2 } from "react-bootstrap-icons";
import ProfileMain from "./components/profile/ProfileMain";

function App() {
  return (
    <div className="App bg-primary">
      <header className="App-header">
        <Container fluid>
          <Row>
            <Col>
              <h3 className="text-center">My Budget App</h3>
              <Form>
                <Form.Check type="switch" id="theme-switch" />
              </Form>
            </Col>
          </Row>
        </Container>
      </header>

      <Container fluid className="h-100">
        <Tab.Container id="main-nav" defaultActiveKey="dashboard">
          <Row className="h-100">
            <Col sm={2} className="sidebar-nav-column">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="dashboard">
                    <Speedometer size={20} className="nav-icon-svg" />
                    Dashboard
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="income">
                    <Wallet size={20} className="nav-icon-svg" />
                    Income
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="expences">
                    <Wallet2 size={20} className="nav-icon-svg" />
                    Expences
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <div className="user-profile-tabs">
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="profile">
                      <PersonVcard size={20} className="nav-icon-svg" />
                      Profile
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </Col>
            <Col sm={10} className="px-0 pt-1">
              <Tab.Content>
                <Tab.Pane eventKey="dashboard">
                  <DashboardMain />
                </Tab.Pane>
                <Tab.Pane eventKey="income">More ipsum for income</Tab.Pane>
                <Tab.Pane eventKey="expences">More ipsum for expences</Tab.Pane>
                <Tab.Pane eventKey="profile">
                  <ProfileMain />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default App;
