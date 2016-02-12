import React from "react";
import AppBar from "material-ui/lib/app-bar";
import FlatButton from "material-ui/lib/flat-button";
import LeftNav from "material-ui/lib/left-nav";
import MenuItem from "material-ui/lib/menus/menu-item";
import FloatingActionButton from "material-ui/lib/floating-action-button";
import MenuIcon from "material-ui/lib/svg-icons/navigation/menu";
import Velocity from "velocity-animate";


let styles = {
    brand: {
        position: "absolute",
        top: 15,
        left: 15,
        height: 40,
        lineHeight: "40px",
        fontSize: "1.7rem"
    },
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
        backgroundColor: "#151515"
    },
    mobileNavItem: {
        display: "inline-block",
        fontFamily: "Amatic SC",
        fontSize: 32,
        paddingTop: 5,
        paddingBottom: 5
    },
    mobileNavItemIcon: {
        padding: "14px 0px 14px 15px",
        height: 30,
        float: "left"
    },
    mobileNavHeader: {
        height: 75,
        padding: 20,
        fontSize: "1.2rem"
    },
    mobileNavOverlay: {
        backgroundColor: "rgba(200,200,200,.54)"
    },
    openMobileNav: {
        position: "fixed",
        top: 15,
        right: 15,
        zIndex: 999
    }
};

function navigate(id, closeMobileNav) {
    Velocity(document.getElementById(id), "scroll", { duration: 750, offset: this.state.showDesktopNav ? -63 : 0, easing: "easeInOutCubic" });
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
        styles.mobileNavHeader.color = palette.alternateTextColor;
        styles.mobileNavHeader.backgroundColor = palette.accent3Color;
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
                <FlatButton label={item.label} key={item.key} hoverColor="inherit" onTouchTap={navigate.bind(this, item.key)}/>
            );
        });
        let mobileItems = this.props.items.map((item) => {
            return (
                <div>
                    <img style={styles.mobileNavItemIcon} src={["images/menu_", item.key, ".png"].join("")} />
                    <MenuItem style={styles.mobileNavItem} key={item.key} onTouchTap={navigate.bind(this, item.key, true)}>{item.label}</MenuItem>
                </div>
            );
        });
        mobileItems.unshift(<div style={styles.mobileNavHeader}>KutlerSkaggs</div>);

        return (
            <div>
                {this.state.showDesktopNav ?
                    <AppBar
                        title={<span style={styles.title}>KutlerSkaggs</span>}
                        className="kss-header"
                        showMenuIconButton={false}
                        iconElementRight={<div className="flex" style={styles.headerItems}>{items}</div>}
                        iconStyleRight={styles.rightElement}
                        style={this.state.styles.header}
                    />
                    :
                    <div>
                        <div style={styles.brand}>{!this.state.open ? "KutlerSkaggs" : ""}</div>
                        <FloatingActionButton mini={true} style={styles.openMobileNav} backgroundColor="white" onTouchTap={this.handleToggle}>
                          <MenuIcon />
                        </FloatingActionButton>
                    </div>
                }


                <LeftNav
                    docked={false}
                    width={200}
                    openRight={true}
                    open={this.state.open}
                    onRequestChange={open => this.setState({open})}
                    style={styles.mobileNav}
                    overlayStyle={styles.mobileNavOverlay}
                >
                    {mobileItems}
                </LeftNav>
            </div>

        );
    }

});

export default Header;
