import React, { Component } from 'react';

export default class HeaderPage extends Component {
    render() {
        console.log("sindide header page");
        return (
            <nav className="navbar navbar-default">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">
                    <img scr="images/gaurov ojha.jpg"></img>
                </a>
                <ul className="nav navbar-nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/#about">About</a></li>
                </ul>
            </div>
            </nav >
        );
    };
}