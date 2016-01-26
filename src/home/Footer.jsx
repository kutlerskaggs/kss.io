import React from 'react';
import Radium from 'radium';
import FontIcon from 'material-ui/lib/font-icon';

let styles = {
    main: {
        height: 400
    },
    social: {
        padding: 30
    }
};

let About = React.createClass ({

    contextTypes: {
        muiTheme: React.PropTypes.object
    },

    componentWillMount() {
        var palette = this.context.muiTheme.rawTheme.palette;
        styles.main.backgroundColor = palette.accent3Color;
        styles.main.color = palette.alternateTextColor;
        styles.social.color = palette.alternateTextColor;
        styles.social[':hover'] = { color: palette.textColor };
    },

    render() {
        return (
            <div className='row middle-xs center-xs' style={styles.main}>
                <div className='col-xs-12'>
                    <a key='github' style={styles.social} href="https://github.com/kutlerskaggs" tabIndex="0">
                        <i className="fa fa-github fa-fw fa-3x"></i>
                    </a>

                    <a key='twitter' style={styles.social} href="https://twitter.com/kutlerskaggs" tabIndex="0">
                        <i className="fa fa-twitter fa-fw fa-3x"></i>
                    </a>

                    <a key='facebook' style={styles.social} href="https://facebook.com/kutlerskaggs" tabIndex="0">
                        <i className="fa fa-facebook fa-fw fa-3x"></i>
                    </a>

                    <a key='linkedin' style={styles.social} href="https://linkedin.com/company/kutlerskaggs" tabIndex="0">
                        <i className="fa fa-linkedin fa-fw fa-3x"></i>
                    </a>
                </div>
            </div>
        );
    }
});

export default Radium(About);
