import React from "react";
import Radium from "radium";
import TextField from "material-ui/lib/text-field";
import RaisedButton from "material-ui/lib/raised-button";

let styles = {
    main: {
        minHeight: 600
    },
    form: {
        textAlign: "inherit",
        marginBottom: 20
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
            underline = { borderColor: palette.textColor },
            underlineFocus = { borderColor: palette.accent3Color },
            label = { color: palette.textColor },
            input = { minWidth: 400 };

        return (
            <div id={this.props.id} className="row middle-xs" style={styles.main}>
                <div className="col-xs-12 col-sm-4 col-sm-offset-2">
                    <h3>LET'S GET COFFEE</h3>
                    <h5 className="thin">If you like what you've seen so far and would like to chat about your problems or ideas shoot us a quick message.</h5>
                    <h5 className="thin">Maybe we can help you, maybe we can't. Either way the coffee is on us and you won't get a bullshit sales pitch.</h5>
                    <h5 className="thin">Not in Denver? Let's hangout on Google.</h5>
                </div>

                <div className="col-xs-12 col-sm-4">
                    <div className="row end-sm">
                        <TextField floatingLabelText="Email" underlineFocusStyle={underlineFocus} floatingLabelStyle={label} underlineStyle={underline} style={input} />
                    </div>
                    <div className="row end-sm" style={styles.form}>
                        <TextField floatingLabelText="Message" underlineFocusStyle={underlineFocus} floatingLabelStyle={label} underlineStyle={underline} style={input} multiLine={true} />
                    </div>
                    <div className="row end-sm">
                        <RaisedButton backgroundColor={palette.accent3Color} labelColor={palette.alternateTextColor} label="Send" />
                    </div>
                </div>
            </div>
        );
    }
});

export default Radium(Contact);
