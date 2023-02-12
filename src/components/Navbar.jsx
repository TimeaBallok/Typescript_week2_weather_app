import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Navbar() {

    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <h3>Weather App</h3>
            </Container>
        </NavbarBs>
    )
}
