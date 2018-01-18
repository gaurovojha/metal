import React from "react";
import {BrowserRouter,
        Route, 
        Redirect,
        Switch} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Cart from "./cart/components/Cart";
import ProductList from "./ProductList";    
import {App} from "./App";
import StockTable from "./table/StockTable";

//component
export default function Router() {
    return (
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path="/" exact component={StockTable} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/about" component={About} />
                    <Route path="/products" component={ProductList}/>
                    <Route path="/stocks" component={StockTable}/>
                    <Redirect path="*" to="/" />
                </Switch>
            </App>
        </BrowserRouter>
    )
}