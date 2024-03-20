
import {Router, Switch,Route} from "react-router-dom"
import './App.css';
import { createBrowserHistory as history } from "history";
import DashBoard from "./Components/DashBoard/DashBoard";


function App() {
  return (
  // <div>hi</div>
   <Router history={history()}>
     <Switch>
    <Route 
    path="/"
    exact
    component={()=><DashBoard />}
    />
    </Switch>
   </Router>
  );
}

export default App;
