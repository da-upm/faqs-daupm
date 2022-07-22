import './App.css';
import Header from "./components/Header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FAQs from "./components/FAQs";
import Menu from "./components/Menu";
import {faqs} from './faqs';

function App() {
    return (
        <Container style={{padding: 0, backgroundColor: '#f2f2f2'}} fluid>
            <Row>
                <Col>
                    <Header/>
                </Col>
            </Row>
            <Row style={{marginTop: 30, marginLeft: 250, marginRight: 250}}>
                <Col md={2}>
                    <Menu />
                </Col>
                <Col md={10}>
                    <FAQs faqs={faqs} />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
