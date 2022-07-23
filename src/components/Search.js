import Form from 'react-bootstrap/Form';

function Search(props) {
    return (
        <Form.Control type="email" placeholder="Busca tu duda" onChange={props.handleSearchTextChange} />
    );
}

export default Search;
