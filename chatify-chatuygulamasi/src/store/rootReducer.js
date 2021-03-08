import {combineReducers} from "redux";//combineReducers reducers ları birleştirmek için kullanılır, birden fazla reducer buluna bilir uygulamanın içinde 
import {reducer as firebase  } from "react-redux-firebase";//firebase ı reducer olarak import ettik
import  channelReducer  from "./reducers/channelReducer";

const rootReducers=combineReducers({//reducers ları birleştirdiğimiz alan, uygulamada ne kadar reducer varsa herbiri ni tekbir rootReducers altında toplanan alan
    firebase:firebase,  //her farklı özellik(feature) için bir reducer tanımlıyoruz ve o reducer o feature dan sorumlu olur 
    channels:channelReducer,
})

export default rootReducers;   