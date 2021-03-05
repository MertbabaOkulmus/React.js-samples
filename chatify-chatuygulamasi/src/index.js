import React, { useEffect } from "react";
import ReactDOM from "react-dom";
//import { useHistory } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import App from "./App";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import firebase from "./firebase";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider, firebaseReducer, reactReduxFirebase } from "react-redux-firebase";
import store from "./store/store";
import PrivateRoute from "./components/auth/PrivateRoute";

const rrfConfig = {//react redux firebase Config
  userProfile: 'users '
}

const rrfProps = {//react redux firebase Props
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
}

const Root = () => {
  const history = useHistory();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {//bir user varmı yok mu ona bakıyoruz, eğer bir user varsa ve tanımlı halde ise bu login olmuş anlamına gelir
        //login olmuş
        //login oldu ise ana sayfaya yönlendirme yapılsın 
        history.push('/')
      }
      else {
        //login olmamış yada logaut olmuş 
        //login olmadı ise tekrardan login kısına gitsin
        history.push('/login');
      }
    })
  }, [])

  return (
    <Switch>
      <PrivateRoute path="/" exact>
        <App/>
      </PrivateRoute>

      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Router>
        <Root />
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);