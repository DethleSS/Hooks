import { Container, Nav, Navbar} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../Pages/home'

import PageUseEffect from '../Pages/useEffect'
import PageUseState from '../Pages/useState'
import PageUseRef from '../Pages/useRef'
import PageUseMemo from '../Pages/useMemo'
import PageUseCallback from '../Pages/useCallback'
import PageUseContext from '../Pages/useContext'
import PageUseReducer from '../Pages/useReducer'
import PageUseCustomHooks from '../Pages/useCustomHooks'

const Header = () => {
    return (
        <div>
            <Navbar className="bg-dark" collapseOnSelect expand="md" variant="dark">
                <Container>
                    <Navbar.Collapse className="responsive-navbar-nav">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/useState">useState</Nav.Link>
                        <Nav.Link href="/useEffect">useEffect</Nav.Link>
                        <Nav.Link href="/useRef">useRef</Nav.Link>
                        <Nav.Link href="/useMemo">useMemo</Nav.Link>
                        <Nav.Link href="/useCallback">useCallback</Nav.Link>
                        <Nav.Link href="/useContext">useContext</Nav.Link>
                        <Nav.Link href="/useReducer">useReducer</Nav.Link>
                        <Nav.Link href="/useCustomHooks">useCustomHooks</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/useState" component={PageUseState} />
                    <Route exact path="/useEffect" component={PageUseEffect} />
                    <Route exact path="/useRef" component={PageUseRef} />
                    <Route exarc path="/useMemo" component={PageUseMemo} />
                    <Route exarc path="/useCallback" component={PageUseCallback} />
                    <Route exarc path="/useContext" component={PageUseContext} />
                    <Route exarc path="/useReducer" component={PageUseReducer} />
                    <Route exarc path="/useCustomHooks" component={PageUseCustomHooks} />
                </Switch>
            </Router>
        </div>
            
        
    )
}

export default Header