import React, { Component } from 'react'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Form from './components/Form'
import Tabbs from './components/Tabs'




class App extends Component {
  render() {
    return 
    (
      <MuiThemeProvider>
      <div className="App">
        <Tabbs />
        <Form />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
