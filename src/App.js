import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import Create from "./Create";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="">
        {/* <Header/> */}
        <div className="app--switch">
          <Switch>
            <Route exact path = '/'>
              <Home/>
            </Route>
            <Route  path = '/create'>
              <Create/>
            </Route>
            <Route  path ="/blogs/:id">
              <BlogDetails/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

    
  );
}

export default App;
