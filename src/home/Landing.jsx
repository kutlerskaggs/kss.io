import React from 'react';
import Radium from 'radium';
import theaterJS from 'theaterjs';
import globalStyles from '../styles/global';

let styles = {
    main: {
        alignItems: 'center',
        padding: '0 15% 0 15%',
        fontSize: '3em'
    }
};

let Portfolio = React.createClass({

    contextTypes: {
        muiTheme: React.PropTypes.object
    },

    componentWillMount() {
        var muiTheme = this.context.muiTheme.rawTheme;
        styles.main.color = muiTheme.palette.accent1Color;
        styles.main.height = window.innerHeight * .8;
    },

    componentDidMount() {
        // setup typed.js
        var theater = theaterJS();
        theater
            .addActor('landing', { speed: 1, accuracy: 0.8 })
            .addScene('landing:', 1000, 'PROBLEM SOLVING WITH LOGIC', 1000, -5, 'CREATIVITY', 1300, -10, 'PERSISTENCE', 1500, -11, 'SOFTWARE');
    },

    render() {
        return (
            <div style={[globalStyles.flex, styles.main]}>
                <div style={{ paddingBottom: '100px' }}>
                    $&nbsp;<span id="landing" className='theater-cursor'></span>
                </div>
            </div>
        );
    }

});

export default Radium(Portfolio);
