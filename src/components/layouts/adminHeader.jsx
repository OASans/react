import React, {Component} from "react";


//import Button from "../../components/CustomButtons/Button.jsx";
import Button from '@material-ui/core/Button';
import LoginBox from '../boxes/loginBox';
import Grid from '@material-ui/core/Grid';

import { loginBoxShow, show_notification, hide_notification } from '../../redux/actions/action';

import { connect } from 'react-redux';
import { Popover, Icon, Typography } from '@material-ui/core';
import Notification from '../notification';
import { BaseComponent } from '../BaseComponent';



import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const mapStateToProps = state => ({
    user: state.userReducer.info,
    loginbox: state.modalReducer.loginbox,
})


class Header extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            register: false,
            userPopover: null,
        };
    }

    handleUserButton = (event) => {
        if (this.props.user === null) {
            this.props.dispatch(loginBoxShow)
        } else {
            this.setState({
                anchorEl: event.currentTarget,
            });
        }
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    renderUsername=()=>{
        if(this.props.user!=undefined)
        return(
            <Typography style={styles.typography}>
                <span style={{fontSize:17}}>Acting Like </span>
                <span style={{fontSize:17,fontWeight:"bold"}}>{this.props.user.email}</span>
            </Typography>
        )
    }

    signOut=()=>{
        //need to do something
    }

    render() {
        return (
            <div>    
                <Button
                    color={"transparent"}
                    justIcon={true}
                    onClick = {this.props.handleDrawer}
                    >
                    <Icon>dashboard</Icon>
                </Button>

                <Button
                    color={"transparent"}
                    justIcon={true}
                    onClick={this.pushNotification.bind(this, "danger", "23333", this.props.dispatch)}
                    >
                    <Icon>notifications</Icon>
                    <span style={styles.notifications}>5</span>  
                </Button>
        
                <Button
                    color={"transparent"}
                    justIcon={true}
                    onClick={this.handleUserButton}
                    >
                    <Icon>person</Icon>
                </Button>

                <Popover
                    open={Boolean(this.state.anchorEl)}
                    anchorEl={this.state.anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Grid justify="center" >
                        <Grid justify="center" container>
                            {this.renderUsername()}
                        </Grid>
                        <hr/>
                        <Button style={styles.button}>My Upload</Button>
                        <Button style={styles.button}>Help</Button>
                        <Button style={styles.button}>Settings</Button>
                        <hr/>
                        <Button style={styles.buttonBottom} onClick={this.signOut.bind(this)}>Sign out</Button>
                    </Grid>
                </Popover>

                <Notification/>

                <LoginBox/>
            </div>
        );
    }
}


const styles = {

    notifications: {
        zIndex: "4",
        position: "absolute",
        top: "2px",
        border: "1px solid #FFF",
        right: "4px",
        fontSize: "9px",
        background: "#f44336",
        color: "#FFFFFF",
        minWidth: "16px",
        height: "16px",
        borderRadius: "10px",
        textAlign: "center",
        lineHeight: "16px",
        verticalAlign: "middle",
        display: "block"
    },

    typography: {
        marginTop: '5px',
    },


    button: {
        marginLeft: '1px',
        marginRight:'1px',
        width:"100%",
    },

    buttonBottom:{
        marginBottom: '10px',
        marginLeft: '1px',
        marginRight:'1px',
        width:"100%",
    }

};


export default connect(mapStateToProps)(Header);
