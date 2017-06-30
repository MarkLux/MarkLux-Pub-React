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
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import Description from 'material-ui/svg-icons/action/description';
import AccountBox from 'material-ui/svg-icons/action/account-box';
import Input from 'material-ui/svg-icons/action/input';
import Settings from 'material-ui/svg-icons/action/settings';
import UserGroup from 'material-ui/svg-icons/social/group-add';
import BookMark from 'material-ui/svg-icons/action/bookmark';
import Pub from 'material-ui/svg-icons/places/free-breakfast';
import Calendar from 'material-ui/svg-icons/action/today';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import {Card, CardActions,CardMedia, CardTitle} from 'material-ui/Card'
import goTo from '../../utils/goTo';

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
      isLogin: false
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
            <MenuItem
              leftIcon = {<AccountBox/>}
              primaryText="个人资料"
            />
            <MenuItem
              leftIcon = {<Input/>}
              primaryText="登出"
              onTouchTap={this.logout}
            />
            <MenuItem
              leftIcon={<Settings/>}
              primaryText="管理"
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
          onTitleTouchTap = {()=>{goTo('/')}}
          iconElementRight={RightIcon()}
        />
        <Drawer
          open={this.state.drawerOpened}
          docked={false}
          onRequestChange={(open) => this.setState({drawerOpened: open})}
        >
          <AppBar
            title="导航"
            iconElementLeft={
              <IconButton onTouchTap={()=>{this.setState({drawerOpened:false})}}
              ><NavigationClose />
              </IconButton>
            }
          />
          <Card>
            <CardMedia
              overlay={<CardTitle title="Mark Lux" subtitle="亦是行人" />}
            >
              <img src="http://of1deuret.bkt.clouddn.com/17-6-21/88975568.jpg" alt="" />
            </CardMedia>
            <CardActions>
              <FlatButton
                label="GITHUB"
                target="_blank"
                href="https://github.com/MarkLux"
                icon={<i className="fa fa-github" aria-hidden="true" />}
              />
              <FlatButton
                label="WEIBO"
                target="_blank"
                href="http://www.weibo.com/u/5921933780/"
                icon={<i className="fa fa-weibo" aria-hidden="true"/>}
              />
            </CardActions>
          </Card>
          <MenuItem
            primaryText="博文"
            leftIcon={<Description />}
            rightIcon={<ArrowDropRight />}
            menuItems={[
              <MenuItem primaryText="技术"/>,
              <MenuItem primaryText="生活"/>
            ]}
            onTouchTap={()=>{goTo('/old-calendar');this.setState({drawerOpened:false})}}
          />
          <MenuItem
            primaryText="归档"
            leftIcon={<BookMark/>}
          />
          <MenuItem
            primaryText="小酒馆"
            leftIcon={<Pub/>}
          />
          <MenuItem
            primaryText="老黄历"
            leftIcon={<Calendar/>}
            onTouchTap={()=>{goTo('/old-calendar');this.setState({drawerOpened:false})}}
          />
          <MenuItem
            primaryText="友情链接"
            leftIcon={<UserGroup />}
            rightIcon={<ArrowDropRight />}
            menuItems={[
              <MenuItem primaryText="OutXu"/>,
              <MenuItem primaryText="Yz"/>,
              <MenuItem primaryText="Abtion"/>,
              <MenuItem primaryText="Hotown"/>,
            ]}
          />
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