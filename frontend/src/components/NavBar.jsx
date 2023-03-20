import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


export const NavBar = () =>{
    return (
        <header>
        <Navbar bg="dark" variant="dark">
            <Container>
            <LinkContainer to="/">
                <Navbar.Brand><i className="mb-2 fas fa-home">PetShop</i></Navbar.Brand>
            </LinkContainer>   
            <Navbar.Toggle aria-controls="navbarScroll" />
            {/* <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav> */}
            <Navbar.Collapse id="navbarScroll">
                <Nav className="mr-auto">
                <LinkContainer to="/">
                    <Nav.Link >All Products</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                    <Nav.Link><i></i> Login</Nav.Link>
                </LinkContainer>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
    )
}