import React from "react";
import AppBar from "material-ui/lib/app-bar";
import FlatButton from "material-ui/lib/flat-button";
import IconButton from "material-ui/lib/icon-button";
import FontIcon from "material-ui/lib/font-icon";
import LeftNav from "material-ui/lib/left-nav";
import MenuItem from "material-ui/lib/menus/menu-item";
import Velocity from "velocity-animate";


let styles = {
    title: {

    },
    rightElement: {
        marginTop: 0
    },
    headerItems: {
        alignItems: "center",
        height: 64
    },
    mobileNav: {

    }
};

function navigate(id, closeMobileNav) {
    Velocity(document.getElementById(id), "scroll", { duration: 750, offset: -63, easing: "easeInOutCubic" });
    if(closeMobileNav) {
        this.setState({open: false})
    }
}

let Header = React.createClass({

    contextTypes: {
        muiTheme: React.PropTypes.object
    },

    handleToggle() {
        this.setState({open: !this.state.open})
    },

    getInitialState() {
        return {
            open: false,
            showDesktopNav: window.innerWidth > 991,
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
        let palette = this.context.muiTheme.rawTheme.palette;
        styles.title.color = palette.textColor;
        styles.mobileNav.color = palette.alternateTextColor;
    },

    componentDidMount() {
        // fade app bar in on scroll
        window.addEventListener("scroll", () => {
            var state = this.state;
            state.styles.header.backgroundColor = window.pageYOffset > 50 ? "rgba(20,20,20,1)" : "rgba(0,0,0,0)";
            this.setState(state);
        });

        window.addEventListener("resize", () => {
            var state = this.state;
            state.showDesktopNav = window.innerWidth > 991;
            this.setState(state);
        })

    },

    // TODO remove event listeners

    render() {
        let items = this.props.items.map((item) => {
            return (
                <FlatButton label={item.label} key={item.key} onClick={navigate.bind(this, item.key)}/>
            );
        });
        let mobileItems = this.props.items.map((item) => {
            return (
                <MenuItem style={styles.mobileNav} key={item.key} onClick={navigate.bind(this, item.key, true)}>{item.label}</MenuItem>
            );
        });

        return (
            <div>
                <AppBar
                    title={<span style={styles.title}>KutlerSkaggs</span>}
                    className="kss-header"
                    showMenuIconButton={false}
                    iconElementRight={ this.state.showDesktopNav ? <div className="flex" style={styles.headerItems}>{items}</div> : <div className="flex" style={styles.headerItems}><IconButton onClick={this.handleToggle}><FontIcon className="material-icons" color={styles.title.color}>menu</FontIcon></IconButton></div> }
                    iconStyleRight={styles.rightElement}
                    style={this.state.styles.header}
                />

                <LeftNav
                    docked={false}
                    width={200}
                    openRight={true}
                    open={this.state.open}
                    onRequestChange={open => this.setState({open})}
                >
                    {mobileItems}
                </LeftNav>
            </div>

        );
    }

});

export default Header;
