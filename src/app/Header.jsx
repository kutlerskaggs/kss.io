import React from "react";
import AppBar from "material-ui/lib/app-bar";
import FlatButton from "material-ui/lib/flat-button";
import Velocity from "velocity-animate";


let styles = {
    title: {

    },
    rightElement: {
        marginTop: 14
    }
};

function navigate(id) {
    Velocity(document.getElementById(id), "scroll", { duration: 750, offset: -63, easing: "easeInOutCubic" });
}

let Header = React.createClass({

    contextTypes: {
        muiTheme: React.PropTypes.object
    },

    getInitialState() {
        return {
            transparency: 0,
            styles: {
                header: {
                    position: "fixed",
                    backgroundColor: "rgba(0,0,0,0)",
                    boxShadow: "none"
                }
            }
        };
    },

    componentWillMount() {
        styles.title.color = this.context.muiTheme.rawTheme.palette.textColor;
    },

    componentDidMount() {
        // fade app bar in on scroll
        window.addEventListener("scroll", () => {
            var transparency = this.state.transparency,
                newTransparency = Math.min(window.pageYOffset / 600, 0.7);
            if(transparency !== newTransparency) {
                var styles = this.state.styles;
                styles.header.backgroundColor = "rgba(0,0,0," + newTransparency + ")";
                this.setState({ transparency: newTransparency, styles: styles });
            }
        });
    },

    render() {
        var items = this.props.items.map((item) => {
            return (
                <FlatButton label={item.label} key={item.key} onClick={navigate.bind(this, item.key)}/>
            );
        });

        return (
            <AppBar
                title={<span style={styles.title}>KutlerSkaggs</span>}
                className="kss-header"
                showMenuIconButton={false}
                iconElementRight={
                    <div>{items}</div>
                }
                iconStyleRight={styles.rightElement}
                style={this.state.styles.header}
            />
        );
    }

});

export default Header;
