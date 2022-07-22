import {useState} from "react";
import {ReactComponent as Arrow} from '../assets/arrow.svg'

function FAQ(props) {
    let [expanded, setExpanded] = useState(false);
    const handleExpansion = () => expanded = setExpanded(!expanded);

    return (
        <div className="faq">
            <div className="faq-header" onClick={handleExpansion}>
                <span className="faq-title">{props.title}</span>
                <Arrow className={"faq-arrow" + (expanded ? " rotate" : "")} stroke="#00509b" />
            </div>
            {
                expanded &&
                <div className="faq-content" dangerouslySetInnerHTML={{__html: props.content}} />
            }
        </div>
    );
}

export default FAQ;