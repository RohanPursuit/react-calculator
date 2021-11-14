import { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons';

class App extends Component {
  constructor(){
    super()
    this.state = {
     userInput: '',
    }
  }
  



  render() {
      return (
        <div className="App">
          <div className="display">
            <div>{this.state.userInput || 0}</div>
            </div>
          <Buttons/>
      </div>
    );
  }
}

export default App;
