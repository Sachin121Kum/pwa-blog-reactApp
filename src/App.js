import './App.css';
import { Navbar,Nav } from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';

function App() {
  return (
    <div className="App">
      <Router>
   <Navbar bg="primary" data-bs-theme="dark">
          <Navbar.Brand >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
            <Nav.Link><Link to="/users">Users</Link></Nav.Link>
          </Nav>
      </Navbar>
      <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/users' element={<Users />} />
</Routes>
      </Router>
    </div>
  );
}

export default App;
