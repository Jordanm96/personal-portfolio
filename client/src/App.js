import "./App.css";
import Home from "./screens/Home/Home";
import FreshTomatoes from "./screens/Projects/FreshTomatoes";
import GroupRun from "./screens/Projects/GroupRun";
import ImaMiru from "./screens/Projects/ImaMiru";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/fresh">
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
