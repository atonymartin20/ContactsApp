import React from 'react';

// @material-ui/core components
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Toolbar from "@material-ui/core/Toolbar";
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const styles = theme => ({
    appBar: {
        display: "flex",
        color: "white",
        width: "100%",
        boxShadow: "none",
        alignItems: "center",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        position: "fixed",
        height: 65,
        top: "0",
        padding: "0px 4%",
        fontSize: "2.5rem",
        backgroundColor: "#000080",
        zIndex: 10000,
        [theme.breakpoints.down(710)]: {
            padding: '0px 2%'
        }
    },
    closeButton: {
        padding: 15,
        paddingLeft: 35,
    },
    closeIconStyling: {
        width: '25px',
        height: '25px',
        cursor: "pointer",
    },
    closeIconToolbar: {
        height: 65,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    drawer: {
        [theme.breakpoints.up(710)]: {
            width: 240,
            flexShrink: 0
        }
    },
    drawerList: {
        display: 'flex',
        padding: '0px',
        margin: '0px',
        listStyle: 'none',
        flexDirection: "column",
    },
    drawerListItem: {
        float: "left",
        color: "inherit",
        position: "relative",
        display: "flex",
        alignItems: 'center',
        margin: "0",
        padding: "0",
        width: '100%',
        borderBottom: '1px solid #C2C2C2',
        borderRight: '1px solid #C2C2C2',
        backgroundColor: '#DDDDDD',
        "& ul": {
            maxHeight: "400px",
            overflow: "scroll"
        }
    },
    drawerNavLink: {
        color: "inherit",
        position: "relative",
        padding: "0.9375rem",
        fontWeight: "400",
        fontSize: "1.8rem",
        lineHeight: "20px",
        textDecoration: "none",
        display: "inline-flex",
        width: "100%",
        height: 60,
        paddingLeft: 15,
        textAlign: "left",
        textTransform: "none",
        "& > span:first-child": {
            justifyContent: "flex-start"
        },
        "&:hover,&:focus": {
            // backgroundColor: "#000080",
            backgroundColor: "#AA1649",
            color: "white"
        },
        "& .fab,& .far,& .fal,& .fas,& .material-icons": {
            position: "relative",
            top: "2px",
            marginTop: "-4px",
            marginRight: "4px",
            marginBottom: "0px",
            fontSize: "1.25rem"
        },
        "& svg": {
            marginRight: "3px",
            width: "20px",
            height: "20px"
        }
    },
    drawerPaper: {
        width: '100%',
        backgroundColor: '#E2E2E2',
        color: 'black',
    },
    hide710: {
        [theme.breakpoints.down(710)]: {
            display: 'none'
        }
    },
    logo: {
        fontFamily: "Rye, cursive",
        fontSize: "3.0rem",
        [theme.breakpoints.down(710)]: {
            margin: '0 auto',
        },
        [theme.breakpoints.down(500)]: {
            fontSize: "2.5rem",
        },
        [theme.breakpoints.down(400)]: {
            fontSize: "2.0rem",
        },
    },
    menuIconStyling: {
        width: '25px',
        height: '25px',
        cursor: "pointer",
    },
    permanentDrawerList: {
        display: 'flex',
        padding: '0px',
        margin: '0px',
        listStyle: 'none',
        flexDirection: "column",
        marginTop: 65,
    },
    permanentDrawerListItem: {
        color: "inherit",
        position: "relative",
        display: "flex",
        justifyContent: 'center',
        margin: "0",
        padding: "0",
        marginTop: '15px',
        width: '100%',
        backgroundColor: '#DDDDDD',
        "& ul": {
            maxHeight: "400px",
            overflow: "scroll"
        }
    },
    permanentDrawerNavLink: {
        color: "white",
        position: "relative",
        padding: "0.9375rem",
        fontWeight: "400",
        fontSize: "2.2rem",
        lineHeight: "20px",
        textDecoration: "none",
        display: "inline-flex",
        width: "95%",
        height: 60,
        marginLeft: '0px',
        backgroundColor: '#1565C0',
        textTransform: "none",
        "&:hover,&:focus": {
            backgroundColor: "#AA1649",
            color: "white"
        },
        "& .fab,& .far,& .fal,& .fas,& .material-icons": {
            position: "relative",
            top: "2px",
            marginTop: "-4px",
            marginRight: "4px",
            marginBottom: "0px",
            fontSize: "1.25rem"
        },
        "& svg": {
            marginRight: "3px",
            width: "20px",
            height: "20px"
        }
    },
    permanentDrawerPaper: {
        display: 'none',
        width: '100%',
        backgroundColor: '#E2E2E2',
        color: 'black',
        [theme.breakpoints.up(710)]: {
            display: 'block',
            width: 240
        }
    },
    show710: {
        display: 'flex',
        [theme.breakpoints.up(710)]: {
            display: 'none'
        }
    },
    toolbar: {
        height: 65,
        display: "flex",
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down(600)]: {
            justifyContent: 'flex-start'
        },
    }
})

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false
        };
    }

    handleDrawerToggle = () => {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        })
    }

    handleClose = () => {
        this.setState({
            drawerOpen: false
        })
    }

    render() {
        const { classes } = this.props;

        const drawer = (
            <div>
                <div className={classes.closeIconToolbar}>
                    {this.state.drawerOpen ? (
                        <div className={classes.closeButton} onClick={this.handleClose}>
                            <CloseIcon className={classes.closeIconStyling} />
                        </div>
                    ) : null}
                </div>
                <Divider />
                <List className={classes.drawerList}>
                    <ListItem className={classes.drawerListItem}>
                        <Button
                            href='/'
                            className={classes.drawerNavLink}
                        >
                            Home
                        </Button>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Button
                            href='/'
                            className={classes.drawerNavLink}
                        >
                            Add Contact
                        </Button>
                    </ListItem>
                </List>
            </div>
        )

        return (
            <div>
                <AppBar className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <Hidden implementation="css" className={classes.show710}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleDrawerToggle}
                            >
                                <MenuIcon className={classes.menuIconStyling} />
                            </IconButton>
                        </Hidden>
                        <h1 className={classes.logo}>Contacts App</h1>
                    </Toolbar>
                </AppBar>

                <nav className={classes.drawer}>
                    <Hidden smUp implementation="css">
                        <Drawer
                            variant="temporary"
                            anchor={'left'}
                            open={this.state.drawerOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.permanentDrawerPaper
                            }}
                            variant="permanent"
                            open
                        >
                            <List className={classes.permanentDrawerList}>
                                <ListItem className={classes.permanentDrawerListItem}>
                                    <Button
                                        href='/'
                                        className={classes.permanentDrawerNavLink}
                                    >
                                        Home
                                    </Button>
                                </ListItem>
                                <ListItem className={classes.permanentDrawerListItem}>
                                    <Button
                                        href='/'
                                        className={classes.permanentDrawerNavLink}
                                    >
                                        Add Contact
                        </Button>
                                </ListItem>
                            </List>
                        </Drawer>
                    </Hidden>
                </nav>
            </div>
        )
    }
}

export default withStyles(styles)(Navbar);