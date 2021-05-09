import "./App.css";
import Home from "./screens/Home/Home";
import FreshTomatoes from "./screens/Details/FreshTomatoes";
import GroupRun from "./screens/Details/GroupRun";
import ImaMiru from "./screens/Details/ImaMiru";

import { Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Route path="/fresh-tomatoes">
        <FreshTomatoes />
      </Route>
      <Route path='/group-run'>
      <GroupRun />
      </Route>
      <Route path='/ima-miru'>
        <ImaMiru />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </div>
  );
}

export default App;
