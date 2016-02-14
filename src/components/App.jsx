import React from "react";

// root component and global styles
import Home from "./home/Home.jsx";
import "../styles/styles.jsx";

// Material-UI
import ThemeManager from "material-ui/lib/styles/theme-manager";
import RawMuiTheme from "../styles/theme"; // material ui theme
import injectTapEventPlugin from "react-tap-event-plugin"; // temporary material-ui dependency
injectTapEventPlugin();

export default React.createClass({

    childContextTypes : {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(RawMuiTheme)
        };
    },

    render () { return <Home/>; }
});
