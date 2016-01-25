import React from 'react';
import Colors from 'material-ui/lib/styles/colors';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../styles/theme';

// component
import Home from '../home/Home.jsx';

const App = React.createClass({

  childContextTypes : {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme)
    };
  },


  render () {
    return <Home/>;
  },
});

export default App;
