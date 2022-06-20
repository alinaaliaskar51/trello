import "./App.css";
import LandingPage from "./components/landingPage/LandingPage";
import LoginPage from "./components/login/LoginPage";
import { useSelector } from "react-redux";
import WorkSpace from "./components/workSpace/WorkSpace";
import { BrowserRouter,Redirect,Route, Switch } from "react-router-dom";


function App() {
  // const showLogin = useSelector((state) => state.login.showLogin);
  

  return( 
  <div className="App">
    <Switch>
      <Route path='/' exact>
        <Redirect to='/landingpage' />
      </Route>

      <Route path="/landingpage">
      <LandingPage />
      </Route>
      <Route path="/loginpage">
      <LoginPage />
      </Route>
      <Route path="/workSpace">
      <WorkSpace/>
      </Route>
    </Switch>

   
    
  </div>);
}

export default App;
