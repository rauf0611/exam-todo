import React, { Component } from 'react';
import redux from 'redux';

import {Provider} from 'react-redux'; 
import { createStore } from 'redux';

import TodoList from './components/TodoList';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const initialState = {
  inputValue:'',
  list:[]
  
}

const store= createStore(reducer);

function reducer(state=initialState, action){
switch (action.type) {
  case 'ADD_TODO':
    return {
      list: state.inputValue 
    };
    case 'DELETE_TODO':
    return {
      list: state.list 
    }
    

  default:
    return state;
}
}

class App extends Component {
 
  
  
  render() {
    return (
      <div className="App text-center">
        <Provider store={store}>

        <TodoList/>

        </Provider>
        
      </div>
    )
  }
}
export default App;