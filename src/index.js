// react.js
import React from "react";
import ReactDOM from "react-dom";

// temporary material-ui dependency...will go away when react v1.0 is released
// import injectTapEventPlugin from "react-tap-event-plugin";

// our app"s entry point
import App from "./app/App.jsx";

// render our app"s root component
ReactDOM.render(<App/>, document.getElementById("app"));
