import React from "react";
import Radium from "radium";

let styles = {
    amatic: {
        fontFamily: "Amatic SC"
    },
    icon: {
        width: "auto",
        "@media (max-width: 991px)": {
            height: 90
        }
    },
    wrapper: {

    },
    main: {
        padding: "50px 0px"
    },
    process: {
        header: {
            marginBottom: 20
        },
        itemWrapper: {
            maxWidth: 400,
            margin: "20px 0px"
        },
        body: {
            padding: "0px 15px",
            lineHeight: "30px",
            "@media (max-width: 991px)": {
                padding: 0
            }
        }
    }
};

let About = React.createClass ({

    contextTypes: {
        muiTheme: React.PropTypes.object
    },

    componentWillMount() {
        var muiTheme = this.context.muiTheme.rawTheme;
        styles.wrapper.backgroundColor = muiTheme.palette.accent1Color;
        styles.main.color = muiTheme.palette.textColor;
    },

    render() {
        return (
            <div className="container-fluid" style={styles.wrapper}>
                <div className="row center-xs" style={styles.main} id={this.props.id}>

                    <div style={styles.process.header} className="col-xs-12 col-sm-10">
                        <h1>OUR PROCESS</h1>
                        <h3 style={styles.amatic} className="thin">Simple. Straightforward.</h3>
                    </div>

                    <div className="col-xs-12 col-md-3 row center-xs">
                        <div style={styles.process.itemWrapper}>
                            <div>
                                <img style={styles.icon} src="images/chat.png"/>
                            </div>
                            <h3 style={styles.amatic} className="thin">Chat</h3>
                            <h6 style={styles.process.body}>Understand your needs and provide the best options for your unique problem or idea.</h6>
                        </div>
                    </div>

                    <div className="col-xs-12 col-md-3 row center-xs">
                        <div style={styles.process.itemWrapper}>
                            <div>
                                <img style={styles.icon} src="images/design.png"/>
                            </div>
                            <h3 style={styles.amatic} className="thin">Design</h3>
                            <h6 style={styles.process.body}>Together we create the perfect prototype of your app before a line of code is written.</h6>
                        </div>
                    </div>

                    <div className="col-xs-12 col-md-3 row center-xs">
                        <div style={styles.process.itemWrapper}>
                            <div>
                                <img style={styles.icon} src="images/build.png"/>
                            </div>
                            <h3 style={styles.amatic} className="thin">Build</h3>
                            <h6 style={styles.process.body}>We create your masterpiece based on the prototype specifications and deploy your app to reliable, secure servers.</h6>
                        </div>
                    </div>

                    <div className="col-xs-12 col-md-3 row center-xs">
                        <div style={styles.process.itemWrapper}>
                            <div>
                                <img style={styles.icon} src="images/maintain.png"/>
                            </div>
                            <h3 style={styles.amatic} className="thin">Maintain</h3>
                            <h6 style={styles.process.body}>Let us keep your app happy and healthy so you can stress about other things.</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Radium(About);
