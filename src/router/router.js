import React from 'react';
import { browserHistory, hashHistory, IndexRoute, Route, Router } from 'react-router';
import App from '../componets/App/index'
import OldCalendar from '../componets/OldCalendar'
import PostList from '../componets/PostList'

// 根据环境设置路由
const history = process.env.NODE_ENV === 'development' ? hashHistory : browserHistory

const AppRouter = ()=>{
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/old-calendar" component={OldCalendar}/>
        <Route path="/posts" component={PostList}/>
      </Route>
    </Router>
    )
}

export default AppRouter;