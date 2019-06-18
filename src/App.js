import React from 'react';
import './App.css';
import {store} from './store';
import {Provider} from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Dog Breeds App</h1>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
