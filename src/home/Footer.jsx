import React from 'react';
import Radium from 'radium';
import FontIcon from 'material-ui/lib/font-icon';
import globalStyles from '../styles/global';

let styles = {
    main: {
        height: 400,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        fontSize: '1.2em',
        verticalAlign: 'text-bottom'
    }
};

let About = React.createClass ({

    contextTypes: {
        muiTheme: React.PropTypes.object
    },

    componentWillMount() {
        var muiTheme = this.context.muiTheme.rawTheme;
        styles.main.backgroundColor = muiTheme.palette.accent3Color;
        styles.main.color = muiTheme.palette.alternateTextColor;
    },

    render() {
        return (
            <div style={[globalStyles.flex, styles.main]}>
                <div>

                </div>
            </div>
        );
    }
});

export default Radium(About);
