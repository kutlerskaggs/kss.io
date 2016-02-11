import React from "react";
import Radium from "radium";

let styles = {
    wrapper: {

    },
    main: {
        height: 400,
        "@media (max-width: 991px)": {
            height: 200
        }
    },
    social: {
        padding: 30,
        transition: "color 200ms",
        "@media (max-width: 991px)": {
            padding: 15
        }
    }
};

let About = React.createClass ({

    contextTypes: {
        muiTheme: React.PropTypes.object
    },

    componentWillMount() {
        var palette = this.context.muiTheme.rawTheme.palette;
        styles.wrapper.backgroundColor = palette.accent3Color;
        styles.main.color = palette.alternateTextColor;
        styles.social.color = palette.alternateTextColor;
        styles.social[":hover"] = { color: palette.textColor };
    },

    render() {
        return (
            <div className="container-fluid" style={styles.wrapper}>
                <div className="row middle-xs center-xs" style={styles.main}>
                    <div className="col-xs-12">
                        <a key="github" style={styles.social} href="https://github.com/kutlerskaggs" tabIndex="0">
                            <i className="fa fa-github fa-fw fa-3x"></i>
                        </a>

                        <a key="medium" style={styles.social} href="https://medium.com/@kutlerskaggs" tabIndex="0">
                            <i className="fa fa-medium fa-fw fa-3x"></i>
                        </a>

                        <a key="twitter" style={styles.social} href="https://twitter.com/kutlerskaggs" tabIndex="0">
                            <i className="fa fa-twitter fa-fw fa-3x"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
});

export default Radium(About);
