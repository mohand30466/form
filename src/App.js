import './App.css';
import Post from "./component/post/post"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Deleteitems from "./component/delete/delete"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Router>
        <Switch>
          <Route exact path="/">
          <Post></Post>
          </Route>
        
          <Route exact path="/delete">
            <Deleteitems/>
          </Route>
        </Switch>
      </Router>
      
      {/* </header> */}
    </div>
  );
}

export default App;
