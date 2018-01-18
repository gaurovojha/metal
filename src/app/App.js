import React, {Component} from "react";

import Header from "./Header";
import Footer from "./Footer";

import Home from "./Home";
import About from "./About";

import Cart from "./cart/components/Cart";


export class App extends Component {

    contact() {
        console.log("Called by child");
    }

    //returns a view
    //<h1 id='head'>Product App</h1>
    render() {
        return (
            <div>
                {/* comments */}

                    <Header title="Mettalica">

                    </Header>
                    
                   {/* view container */}

                   {this.props.children}

                    <Footer year={2017} 
                            company="React App" 
                            contact = {()=> this.contact()}
                            >

                            <h1>show me</h1>
                    </Footer>

            </div>
         )
        // return React.createElement('h1', 
        //                            {
        //                                id: 'head'
        //                            },
        //                            "Product App"
        //                         )
    }
}