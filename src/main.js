import 'whatwg-fetch';
//bootstrap react comp into browser

import {render} from "react-dom";

//import {App} from "./app/App";
import Router from "./app/Router";

import React from "react";

render(<Router />, //virtual dom
      document.getElementById("root") //real dom
);