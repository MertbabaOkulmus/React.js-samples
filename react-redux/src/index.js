import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./reducers/index";

const store=createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    {/* Provider ile sarıyoruz */}
    <Provider store={store}> {/*provider store diye bir değer alır ve biz burda oluşturduğumuz const store degerini store a göndeririz*/}
       <Router>
          <App/>
       </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
