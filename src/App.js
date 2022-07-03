import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Meditations from "./components/Meditations";
import Player from "./components/Player";
import info from "./helpers/dbhelper";
import blogData from "./helpers/blogshelper";
import Blogs from "./components/Blogs";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' render={(props) => <Landing />} />
          <Route
            exact
            path='/meditations'
            render={(props) => <Meditations data={info} />}
          />
          <Route
            exact
            path='/blogs'
            render={(props) => <Blogs data={blogData} />}
          />
          <Route
            exact
            path='/player/:id/:name'
            render={(props) => <Player {...props} />}
          />
          <Route
            exact
            path='/post/:id/'
            render={(props) => <BlogPost {...props} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
