import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample({expand}) {
    return (
        <>
            <Navbar key={expand} bg="primary" expand={expand} className="mb-3">
            <Button/>
            <Button/>
            <Button/>
            <Button/>
            <Button/>
            </Navbar>
        </>
    );
}

export default OffcanvasExample;