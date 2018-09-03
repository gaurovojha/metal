import 'whatwg-fetch';
//bootstrap react comp into browser

import {render} from "react-dom";

//import {App} from "./app/App";
import Router from "./app/Router";

import React, {Component} from "react";
import AboutPage from './week1/about/aboutPage';
import HomePage from './week1/homePage';
import HeaderPage from './week1/common/headerPage';

// render(<Router />, //virtual dom
//       document.getElementById("root") //real dom
// );

// render(<AboutPage></AboutPage>, //virtual dom
//       document.getElementById("root"));//real dom

export default class Main extends Component{

    render(){
        var Child;
        switch(this.props.route){
            case 'about' : Child = AboutPage; break;
            default: Child = HomePage ; break;
        }
        return(
            
            <div>
                <HeaderPage></HeaderPage>
                <Child></Child>
            </div>
        );
    };
}

function renderMe(){
    var route = window.location.hash.substr(1);
    render(<Main route={route}></Main>, //virtual dom
        document.getElementById("root"));//real dom
}
window.addEventListener('hashchange',renderMe);
renderMe(); 
