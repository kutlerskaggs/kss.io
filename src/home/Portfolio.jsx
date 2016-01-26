import React from 'react';
import Radium from 'radium';

let styles = {
    main: {
        // offset h3 top margin
        padding: '2.54rem 0 4rem 0'
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
    },

    render() {
        return (
            <div id={this.props.id} className='row middle-xs' style={styles.main}>
                <div className='col-xs-12 col-sm-8 col-sm-offset-2'>
                    <h3>Westmoreland Coal Co.</h3>
                    <h5 className='thin'>Executive management key performance indicator dashboard.</h5>
                    <img style={styles.image} src="assets/images/wccportal.png" alt="" />
                </div>
            </div>
        );
    }

});

export default Radium(Portfolio);
