import { createStoreHook } from "react-redux";
import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./rootReducer";

const store =createStore(rootReducer,{},composeWithDevTools());//composeWithDevTools u kledik ki crome da ki redux eklentisi ile debug edebilelim

export default store;