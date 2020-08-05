import React from 'react';
import Login from "./Components/Login/Login"
import Dashboard from "./Components/Dashboard/Dashboard"
import {
  BrowserRouter,
  Switch,
  Route,

} from "react-router-dom";
import {ProtectedRoute} from "./protected.route"
function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}

function Routes(){
  return(
    <BrowserRouter>
      <Route exact path="/" component={Login}/>
      <ProtectedRoute exact path="/dashboard" component={Dashboard}/>
      <Route path="*" component={()=>"404 not fucking found" }/>
    </BrowserRouter>
  )
}

export default App;
