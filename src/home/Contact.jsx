import React from 'react';
import Radium from 'radium';
import FontIcon from 'material-ui/lib/font-icon';
import globalStyles from '../styles/global';

let styles = {
    main: {
        height: 600,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 15% 0 15%'
    },
    left: {
        flex: 1
    },
    right: {
        flex: 1
    },
    header: {
        fontWeight: 300,
        fontSize: '3em'
    },
    body: {
        fontWeight: 300,
        fontSize: '2em',
        padding: '.67em 0 2em 0'
    }
};

let Contact = React.createClass ({

    contextTypes: {
        muiTheme: React.PropTypes.object
    },

    componentWillMount() {
        var muiTheme = this.context.muiTheme.rawTheme;
        styles.main.color = muiTheme.palette.textColor;
    },

    render() {
        return (
            <div style={[globalStyles.flex, styles.main]}>
                <div style={styles.left}>
                    <h1>LET'S GRAB COFFEE</h1>
                    <h4>If you like what you've seen so far and would like to chat about your problems or ideas shoot us a quick message.</h4>
                    <h4>Maybe we can help you, maybe we can't. Either way the coffee is on us and you won't get a bullshit sales pitch.</h4>
                    <h4>Not in Denver? Let's hangout on Google.</h4>
                </div>

                <div style={styles.right}>

                </div>
            </div>
        );
    }
});

export default Radium(Contact);
