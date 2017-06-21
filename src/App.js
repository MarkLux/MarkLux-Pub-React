import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from "./componets/NavBar";
import {lightBlue300
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IndexPic from './componets/IndexPic/IndexPic';


class App extends Component {
  render() {
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: lightBlue300
        ,
      },
    });
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <NavBar/>
          <IndexPic/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;