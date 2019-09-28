import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { products } from "./products.fake";


export default class Product extends Component {
    render() {
        const { match: { params: { productKey }, url, path } } = this.props

        let infoProduct = products.find(item => item.key === productKey);
        const { timelines } = infoProduct;
        return (
            <>
                {productKey}
                <hr/>
                {timelines && timelines.length > 0 && timelines.map(item => (
                    <>
                    <strong>{item}</strong><br/>
                    </>
                ))}

                {/* <h1>List Products</h1>
                <ul>
                    <li>
                        <Link to={`${url}/abc`}>ABC</Link>
                    </li>
                    <li>
                        <Link to={`${url}/def`}>DEF</Link>
                    </li>
                    <li>
                        <Link to={`${url}/ghi`}>GHI</Link>
                    </li>
                </ul>
                <hr /> */}
            </>
        )
    }
}