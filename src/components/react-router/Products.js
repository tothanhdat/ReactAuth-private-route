import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Product from "./Product";

export default class Products extends Component {
    render() {
        const { match } = this.props;
        return (
            <>
                <ul>
                    <li>
                        <Link to={`${match.url}/nodejs`}>NodeJS</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/mongo`}>MongoDB</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/react`}>ReactJS</Link>
                    </li>
                </ul>
                <hr />
                <Route path={`${match.path}:/productKey`} component={Product} />
            </>
        )
    }
}