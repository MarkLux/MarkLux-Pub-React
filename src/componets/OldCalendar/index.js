import React, { Component } from 'react'
import { Card,CardHeader, CardMedia, CardText, CardTitle } from 'material-ui/Card'
import { getDateDay } from '../../utils/timeFormat'
import { Row, Grid, Col } from 'react-flexbox-grid'
import CaldendarIcon from 'material-ui/svg-icons/action/today'
import Done from 'material-ui/svg-icons/action/done'
import Clear from 'material-ui/svg-icons/content/clear'
import CheckCircle from 'material-ui/svg-icons/action/check-circle'
import ActionInfo from 'material-ui/svg-icons/action/info'
import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import './index.css'

class OldCalendar extends Component {

  constructor (props) {
    super(props);
    this.state = {
      isGoodExpanded:true,
      isBadExpanded:true,
      isTipExpanded:false
    }
  }

  // 今日必应接口

  componentDidMount () {
    // todo 不能用这个接口因为有跨域问题，之后在后端做一层代理
    fetch('http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1', {
      method: 'GET'
    }).then((res) => {
      return res.json()
    }).then((json) => {
      let {images} = json
      let {url, copyright} = images[0]
    })
  }

  render () {

    const todate = getDateDay(+Date.now())

    return (
      <div className="wrapper">
      <Grid fluid>
        <Row>
          <Col xs={12} md={6}>
            <Card className="card-container">
              <CardHeader
                title={<span style={{fontSize: 30}}><CaldendarIcon style={{size: 30}} /> {todate.date}</span>}
                subtitle={<span style={{fontSize: 16}}>{todate.day}</span>}
              />
              <CardMedia >
                <img src="http://cn.bing.com/az/hprichbg/rb/AKFox_ZH-CN8586782340_1920x1080.jpg" alt="" />
              </CardMedia>
              <Divider/>
              <CardText>
                <span style={{lineHeight:1}}>
                  <p>德纳利国家公园和自然保护区内的一只赤狐，美国阿拉斯加州</p>
                  <p>(© Michael DeYoung/Design Pics/Getty Images)</p>
                </span>
              </CardText>
              <Divider/>
              <CardText>
                <i>Picture from Microsoft bing & Algorithm referred from runJS</i>
              </CardText>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <div className="card-container">
              <Card className="sub-card-container" expanded={this.state.isGoodExpanded} onExpandChange={()=>{this.setState({isGoodExpanded:!this.state.isGoodExpanded})}}>
                <CardTitle title={<span style={{fontSize: 36}}>宜<Done /></span>} showExpandableButton={true}
                           actAsExpander={true} />
                <Divider />
                <CardText expandable={true}>
                  <List>
                    <ListItem primaryText={<span style={{fontSize: 20}}>写超过260行的代码</span>} leftIcon={<CheckCircle />} />
                    <ListItem primaryText={<span style={{fontSize: 20}}>合并代码分支</span>} leftIcon={<CheckCircle />} />
                    <ListItem primaryText={<span style={{fontSize: 20}}>开会</span>} leftIcon={<CheckCircle />} />
                  </List>
                </CardText>
              </Card>
              <Card
                className="sub-card-container"
                expanded={this.state.isBadExpanded}
                onExpandChange={()=>{this.setState({isBadExpanded:!this.state.isBadExpanded})}}
                >
                <CardTitle title={<span style={{fontSize: 36}}>不宜<Clear /></span>} showExpandableButton={true}
                           actAsExpander={true} />
                <Divider />
                <CardText expandable={true}>
                  <List>
                    <ListItem primaryText={<span style={{fontSize: 20}}>吃面</span>} leftIcon={<ActionInfo />} />
                    <ListItem primaryText={<span style={{fontSize: 20}}>代码审计</span>} leftIcon={<ActionInfo />} />
                  </List>
                </CardText>
              </Card>
              <Card className="sub-card-container" expanded={this.state.isTipExpanded} onExpandChange={()=>{this.setState({isTipExpanded:!this.state.isTipExpanded})}}>
                <CardHeader
                  title="Tips"
                  subtitle="也许你需要一些提示？"
                  actAsExpander
                  showExpandableButton
                />
                <Divider/>
                <CardText expandable>
                  <li><strong>座位朝向：</strong>面向北方写程序，BUG 最少。</li>
                  <li><strong>推荐饮品：</strong> 果味汽水 酸奶</li>
                  <li><strong>推荐食品：</strong> 蛋包饭 汉堡 煎饼</li>
                  <li><strong>女神亲近指数：</strong>★★☆☆☆</li>
                </CardText>
              </Card>
            </div>
          </Col>
        </Row>
      </Grid>
      </div>
    )
  }
}
export default OldCalendar