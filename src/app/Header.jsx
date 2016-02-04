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
            styles: {
                header: {
                    position: "fixed",
                    backgroundColor: "rgba(0,0,0,0)",
                    boxShadow: "none",
                    transition: "background-color .5s linear"
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
            var state = this.state;
            state.styles.header.backgroundColor = window.pageYOffset > 200 ? "rgba(20,20,20,1)" : "rgba(0,0,0,0)";
            this.setState(state);
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
