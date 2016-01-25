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
    header: {
        fontWeight: 300,
        fontSize: '3em'
    },
    body: {
        fontWeight: 300,
        fontSize: '2em',
        padding: '.67em 0 2em 0'
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
        styles.main.backgroundColor = muiTheme.palette.accent1Color;
        styles.main.color = muiTheme.palette.textColor;
    },

    render() {
        return (
            <div style={[globalStyles.flex, styles.main]}>
                <div>
                    <div style={styles.header}>We <FontIcon className="material-icons" style={styles.icon}>favorite_border</FontIcon> Software</div>
                    <div style={styles.body}>Developing creative solutions to problems is what we're passionate about. Pair that with a borderline compulsive attention to detail and the result is delightfully useable software. We think you'll agree.</div>
                </div>
            </div>
        );
    }
});

export default Radium(About);
