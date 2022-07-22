import Form from 'react-bootstrap/Form';
import {useState} from "react";

function Search(props) {
    return (
        <Form.Control type="email" placeholder="Busca tu duda" onChange={props.handleSearchTextChange} />
    );
}

export default Search;
