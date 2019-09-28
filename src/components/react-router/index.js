import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Tip from "./tip";
import Products from "./Products";
export default class RouterDemo extends Component {
    render(){
        return(
            <Router>
                <div>
                    <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/tip">Tip</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    </ul>
                    <hr />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/tip" component={Tip} />
                <Route path="/products" component={Products} />
                </div>
            </Router>
            
        );
    }
}