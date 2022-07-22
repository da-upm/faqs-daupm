import {useState} from "react";
import './Acordeon.css';

function Acordeon(props) {
    let [expanded, setExpanded] = useState(false);
    const handleExpansion = () => expanded = setExpanded(!expanded);

    if (expanded) {
        return (
            <div className="acordeon" onClick={handleExpansion}>
                <div className="acordeon-titulo" style={{textAlign: "center", marginTop: 10, display: "block"}}>
                    {props.title}
                </div>
                <div className="acordeon-body">
                    {props.content}
                </div>
            </div>
        );
    }
    return (
        <div className="acordeon" onClick={handleExpansion}
             style={{textAlign: "center", marginTop: 10, display: "block"}}>
            <div className="acordeon-titulo">
                {props.title}
            </div>
        </div>
    );
}

export default Acordeon