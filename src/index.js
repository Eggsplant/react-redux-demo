import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import TodoList from './Pages/todoList/todoList';
import SecondPage from './Pages/secondPage/secondPage';
import store from './store/store';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/todoList" exact component={TodoList}/>
        <Route path="/secondPage" exact component={SecondPage}/>

        <Redirect to='/todoList'></Redirect>

      </Switch>
    </HashRouter>
  </Provider>
  
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
