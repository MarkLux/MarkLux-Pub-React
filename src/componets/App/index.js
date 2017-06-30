import React, {Component} from 'react';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {lightBlue300} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavBar from '../NavBar/index'
import IndexPic from '../IndexPic/index'



class App extends Component {
  render() {
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: lightBlue300,
      },
    });
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <NavBar/>
          {this.props.children||<IndexPic/>}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;