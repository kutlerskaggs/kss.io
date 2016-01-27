import React from "react";
import ThemeManager from "material-ui/lib/styles/theme-manager";
import Home from "../home/Home.jsx";
import RawMuiTheme from "../styles/theme"; // material ui theme
import "../styles/styles.jsx"; // css

const App = React.createClass({

  childContextTypes : {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(RawMuiTheme)
    };
  },

  render () {
    return <Home/>;
  }

});

export default App;
