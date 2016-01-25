import React from 'react';
import Radium from 'radium';
import globalStyles from '../styles/global';

let styles = {
    main: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: '7% 15% 7% 15%'
    },
    header: {
        fontWeight: 300,
        fontSize: '2em'
    },
    body: {
        fontWeight: 300,
        fontSize: '1.5em',
        padding: '.5em 0 .5em 0'
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '5px'
    }
};

let Portfolio = React.createClass({

    contextTypes: {
        muiTheme: React.PropTypes.object
    },

    componentWillMount() {
        var muiTheme = this.context.muiTheme.rawTheme;
        styles.main.color = muiTheme.palette.textColor;
        styles.main.height = window.innerHeight * .8;
    },

    render() {
        return (
            <div style={[globalStyles.flex, styles.main]}>
                <div>
                <div style={styles.header}>Westmoreland Coal Company</div>
                <div style={styles.body}>Executive management key performance indicator dashboard.</div>
                    <img style={styles.image} src="assets/images/wccportal.png" alt="" />
                </div>
            </div>
        );
    }

});

export default Radium(Portfolio);
