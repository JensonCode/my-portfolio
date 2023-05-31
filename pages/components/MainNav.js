import { NavDropdown, Navbar, Nav,  Container } from "react-bootstrap";
import Link from "next/link"

// Navbar
export default function MainNav(){
    return (
        <>
            <Navbar className = "fixed-top navbar-dark bg-primary" expand="lg">
                <Container fluid>
                    <Navbar.Brand>Jenson</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link href="/" passHref legacyBehavior><Nav.Link >About</Nav.Link></Link>

                        <NavDropdown title="Academic Project" id="basic-nav-dropdown">
                            <Link href="/showcase/oop" passHref legacyBehavior>
                                <NavDropdown.Item>Object-Oriented Programming in C++</NavDropdown.Item>
                            </Link>
                            <NavDropdown.Divider />
                            <Link href="/showcase/sql" passHref legacyBehavior>
                                <NavDropdown.Item>Oracle MySQL</NavDropdown.Item>
                            </Link>
                            <NavDropdown.Divider />
                            <Link href="/showcase/web" passHref legacyBehavior>
                                <NavDropdown.Item>Web development</NavDropdown.Item>
                            </Link>
                            <NavDropdown.Divider />
                            <Link href="/showcase/algo" passHref legacyBehavior>
                                <NavDropdown.Item>Data structure and Algorithm - Pyhton</NavDropdown.Item>
                            </Link>
                        </NavDropdown>
                        <Link href="/contact" passHref legacyBehavior><Nav.Link >Contact</Nav.Link></Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br/><br/><br/>
        </>
      );
}