import React, {Component} from "react";

import {NavLink} from "react-router-dom";
import SubHeader from "./SubHeader"

export default class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>

                <NavLink to="/" className="button" exact activeClassName="success">
                 TRADE
                </NavLink>

                <NavLink to="/cart" className="button" exact activeClassName="success">
                 TRANSFERS
                </NavLink>


                <NavLink to="/products" className="button" exact activeClassName="success">
                 TRANSPORTS
                </NavLink>
                <hr />
                <SubHeader/>
                <hr />
            </div>
        )
    }

}