import React from 'react';
import Radium from 'radium';
import FontIcon from 'material-ui/lib/font-icon';

let styles = {
    main: {
        minHeight: 600,
        // offset h3 top margin
        paddingBottom: '1.46rem'
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
            <div className='row middle-xs' style={styles.main} id={this.props.id}>
                <div className='col-xs-12 col-sm-8 col-sm-offset-2'>
                    <h3>We <FontIcon className="material-icons" style={styles.icon}>favorite_border</FontIcon> Software</h3>
                    <h4 className='thin'>Developing creative solutions to problems is what we're passionate about. Pair that with a borderline compulsive attention to detail and the result is delightfully useable software. We think you'll agree.</h4>
                </div>
            </div>
        );
    }
});

export default Radium(About);
