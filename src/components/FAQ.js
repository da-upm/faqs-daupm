import {useState} from "react";
import {ReactComponent as Arrow} from '../assets/arrow.svg'
import {Col, Container, Row} from "react-bootstrap";

function FAQ(props) {
    let [expanded, setExpanded] = useState(false);
    const handleExpansion = () => expanded = setExpanded(!expanded);

    return (
        <Container fluid className="faq">
            <Row className="faq-header" onClick={handleExpansion}>
                <Col md={11}>
                    <span className="faq-title">{props.title}</span>
                </Col>
                <Col md={1}>
                    <Arrow className={"faq-arrow" + (expanded ? " rotate" : "")} stroke="#00509b" />
                </Col>
            </Row>
            <Row>
                <Col>
                    {
                        expanded &&
                        <div className="faq-content" dangerouslySetInnerHTML={{__html: props.text}} />
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default FAQ;