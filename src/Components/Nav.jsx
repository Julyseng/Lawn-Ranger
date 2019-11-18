import React, { Component } from 'react'
import Contact from './Contact'
import About from './About'
import Home from './Home'
import Services from './Services'
import Gallery from './Gallery'
import Pricing from './Pricing'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'


class Nav extends Component {
    render() {
        return (

            <Router>
                <div >
                <img id='logo' src='./logo-img.png' alt='logo'/>
                </div>
                <div className='Navigations'>
                    <ul>
                        <li><Link to={'/'} className="nav-link"> Home </Link></li>
                        <li><Link to={'/about'} className="nav-link">About</Link></li>
                        <li><Link to={'/services'} className="nav-link">Services</Link></li>
                        <li><Link to={'/pricing'} className="nav-link">Pricing</Link></li>
                        <li><Link to={'/gallery'} className="nav-link">Gallery</Link></li>
                        <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                    </ul>

                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/about' component={About} />
                        <Route path='/pricing' component={Pricing} />
                        <Route path='/gallery' component={Gallery} />
                        <Route path='/services' component={Services} />
                    </Switch>
                </div>


            </Router>

        )
    }
}

export default Nav 