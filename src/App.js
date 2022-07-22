import './App.css';
import Header from "./components/Header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FAQs from "./components/FAQs";
import Menu from "./components/Menu";
import {faqs} from './faqs';
import Search from "./components/Search";
import {useState} from "react";

function App() {
    let [searchText, setSearchText] = useState("");
    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value)
    };

    return (
        <div>
            <Container fluid style={{padding: 0}}>
                <Row>
                    <Col>
                        <Header/>
                    </Col>
                </Row>
            </Container>
            <Container style={{padding: 0}}>
                <Row style={{marginTop: 20, marginBottom: 0}}>
                    <Col md={4} />
                    <Col md={4}>
                        <Search handleSearchTextChange={handleSearchTextChange} />
                    </Col>
                    <Col md={4} />
                </Row>
                <Row>
                    <Col md={2}>
                        <Menu />
                    </Col>
                    <Col md={10}>
                        <FAQs faqs={faqs} searchText={searchText} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
