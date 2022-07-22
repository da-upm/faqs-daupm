import './App.css';
import Header from "./components/Header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FAQs from "./components/FAQs";
import Menu from "./components/Menu";

function App() {
    return (
        <Container style={{padding: 0}} fluid>
            <Row>
                <Col>
                    <Header/>
                </Col>
            </Row>
            <Row style={{marginTop: 30, marginLeft: 80, marginRight: 80}}>
                <Col md={3}>
                    <Menu />
                </Col>
                <Col md={9}>
                    <FAQs />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
