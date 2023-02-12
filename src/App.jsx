import {Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap";
import Home from "./pages/Home.jsx";
import {Navbar} from "./components/Navbar"

function App() {

    return (
        <div>
            <Navbar/>
            <Container className="mb-4">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </Container>
        </div>
    )
}

export default App
