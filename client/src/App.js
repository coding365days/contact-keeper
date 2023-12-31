import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alerts from "./components/layouts/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <>
              <Navbar title="Contact Keeper" icon="fas fa-id-card-alt" />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;

// https://github.com/bradtraversy/contact-keeper/commits/master?after=cfd880c55d369bcab3a989ee937d52ffdfb9954e+104&branch=master&qualified_name=refs%2Fheads%2Fmaster
// User login
