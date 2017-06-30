/**
 * Created by lumin on 17/6/24.
 */
import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardText, CardTitle, FlatButton } from 'material-ui';
import { Row, Grid, Col } from 'react-flexbox-grid';
import './indes.css'

class PostList extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (

      <Grid fluid className="posts-wrapper">
        <Row>
          <Col xs={12} md={4}>
            <Card className="left-nav">
              <CardHeader
                title="Without Avatar"
                subtitle="Subtitle"
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
              </CardActions>
              <CardText expandable={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
            </Card>
          </Col>
          <Col xs={12} md={8}>
          <div >
            <Card className="post-container">
              <CardHeader
                title="URL Avatar"
                subtitle="Subtitle"
                avatar="images/jsa-128.jpg"
              />
              <CardMedia
                overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
              >
                <img src="http://of1deuret.bkt.clouddn.com/17-6-24/89290813.jpg" alt="" />
              </CardMedia>
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
              </CardActions>
            </Card>
            <Card>
              <CardHeader
                title="URL Avatar"
                subtitle="Subtitle"
                avatar="images/jsa-128.jpg"
              />
              <CardMedia
                overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
              >
                <img src="http://of1deuret.bkt.clouddn.com/17-6-24/89290813.jpg" alt="" />
              </CardMedia>
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
              </CardActions>
            </Card>
            <Card>
              <CardHeader
                title="URL Avatar"
                subtitle="Subtitle"
                avatar="images/jsa-128.jpg"
              />
              <CardMedia
                overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
              >
                <img src="http://of1deuret.bkt.clouddn.com/17-6-24/89290813.jpg" alt="" />
              </CardMedia>
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
              </CardActions>
            </Card>
          </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default PostList