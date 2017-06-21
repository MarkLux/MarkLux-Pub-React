/**
 * Created by lumin on 17/6/20.
 */
import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import IconMenu from 'material-ui/IconMenu'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'

class NavBar extends Component {

  constructor (props) {
    super(props)
    this.state = {
      drawerOpened: false,
      isLogin: false,
      isLoginDialog: false
    }
  }

  onLeftIconButtonTouchTap = (event) => {
    this.setState({
      drawerOpened: !this.state.drawerOpened
    })
  }

  onLoginClick = () => {
    this.setState({
      isLoginDialog: true
    })
  }

  login = () => {
    this.setState({
      isLogin: true,
      isLoginDialog: false
    })
  }

  logout = () => {
    this.setState({
      isLogin:false
    })
  }

  render () {

    // 右侧登录状态控制

    const RightIcon = () => {
      if (!this.state.isLogin) {
        return (
          <FlatButton label="Login" onTouchTap={this.onLoginClick} />
        )
      } else {
        return (
          <IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="个人资料" />
            <MenuItem
              primaryText="登出"
              onTouchTap={this.logout}
            />
          </IconMenu>
        )
      }
    }

    // 模态框的按钮

    const dialogActions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={() => {this.setState({isLoginDialog: false})}}
      />,
      <FlatButton
        label="Submit"
        primary
        onTouchTap={this.login}
      />,
    ]

    return (
      <div id="navBar">
        <AppBar
          title="MarkLux | Pub"
          onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap}
          iconElementRight={RightIcon()}
        />
        <Drawer
          open={this.state.drawerOpened}
          docked={false}
          onRequestChange={(open) => this.setState({drawerOpened: open})}
        >
          <MenuItem>博文</MenuItem>
          <MenuItem>小酒馆</MenuItem>
        </Drawer>
        <Dialog
          title="Login"
          modal={true}
          open={this.state.isLoginDialog}
          actions={dialogActions}
        >
          <div>
            <TextField
              floatingLabelText="用户名"
              fullWidth
            /><br />
            <TextField
              floatingLabelText="密码"
              type="password"
              fullWidth
            />
            <br />
          </div>
        </Dialog>
      </div>
    )
  }
}

export default NavBar