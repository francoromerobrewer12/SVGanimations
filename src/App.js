import './App.css';
import Phone from './components/svg-animation/Phone'
import Gym from './components/svg-animation/Gym'
import Sushi from './components/svg-animation/Sushi';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/">
              <Sushi />
            </Route>
            <Route path="/phone">
              <Phone />
            </Route>
            <Route path="/gym">
              <Gym />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
