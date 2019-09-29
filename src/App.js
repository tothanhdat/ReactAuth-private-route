import React from '../node_modules/react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";

import AddUser from "./components/handle-event/add-user"
// import RouterDemo from "./components/react-router/index"
// import AuthDemo from "./components/AuthDemo/auth.demo"
// import DemoStateless from './components/demo.stateless'
// import DemoStateFul from './components/demo.stateful';
// import Products from './components/Products';
// import Tick from './components/Tick';
// import Todo from './components/Todo';
// import HandleEvent from './components/handle-click'
// import HandleEventAddUser from './components/handle-event/handle-event'
 

function App() {
  return (
    <div className="App">
      <Router>
        <AddUser/>
      </Router>
    </div>
  );
}

export default App;
