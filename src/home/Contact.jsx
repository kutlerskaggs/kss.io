import React from "react";
import Radium from "radium";
import TextField from "material-ui/lib/text-field";
import RaisedButton from "material-ui/lib/raised-button";

let styles = {
    amatic: {
        fontFamily: "Amatic SC"
    },
    button: {
        marginTop: 20,
        width: 100
    },
    content: {
        marginTop: "1.68rem",
        marginBottom: "2.1rem",
        maxWidth: 414,
        "@media (max-width: 991px)": {
            marginTop: 0,
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    main: {
        paddingTop: 50,
        paddingBottom: 50
    },
    form: {
        textAlign: "inherit",
        marginBottom: 20
    },
    text: {
        textAlign: "initial",
        lineHeight: "30px"
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
        let palette = this.context.muiTheme.rawTheme.palette,
            textFieldStyles = {
                underlineStyle: { borderColor: palette.textColor },
                underlineFocusStyle: { borderColor: palette.accent3Color },
                floatingLabelStyle: { color: palette.textColor },
                style: {
                    width: "100%"
                }
            };

        return (
            <div className="container-fluid" style={styles.main}>

                <div id={this.props.id} className="row center-xs">
                    <div className="col-xs-12 col-sm-10">
                        <h1>CONTACT</h1>
                        <h3 style={styles.amatic} className="thin">Let's Get Coffee</h3>
                    </div>
                </div>

                <div id={this.props.id} className="row middle-xs">
                    <div className="flex end-md col-xs-12 col-md-6">
                        <h6 style={[styles.content, styles.text]}>
                            <p className="thin">If you like what you've seen so far and would like to chat about your problems or ideas shoot us a quick message.</p>
                            <p className="thin">Maybe we can help you, maybe we can't. Either way the coffee is on us and you won't get a bullshit sales pitch.</p>
                            <p className="thin">Not in Denver? Let's hangout on Google.</p>
                        </h6>
                    </div>

                    <div className="col-xs-12 col-md-6">
                        <div style={styles.content}>
                            <TextField {...textFieldStyles} floatingLabelText="Name" />
                            <TextField {...textFieldStyles} floatingLabelText="Email" />
                            <TextField {...textFieldStyles} floatingLabelText="Message" multiLine={true} />
                            <br/>
                            <div className="flex end-xs">
                                <RaisedButton backgroundColor={palette.accent3Color} labelColor={palette.alternateTextColor} style={styles.button} label="Send" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Radium(Contact);
