import React from "react";
import {connect} from "react-redux";
import "./styles.css";
import { Route } from "react-router-dom";

import Products from "./components/Products";
import Cart from "./components/Cart";

import { data } from "./data";

const App=()=> {
  return (
    <div className="App">
      <h1>
        Alışveriş Sepeti Yapımı
        <img
          src="https://avatars3.githubusercontent.com/u/60869810?v=4"
          alt="React Dersleri"
        />{" "}
        React Dersleri
      </h1>
      <Route exact path="/" component={Products} />
      <Route path="/cart" component={Cart} />
    </div>
  );
}

const mapStateToProps=(state)=>{//bu fonksiyon bize kullanmak istediğimiz state parçalarını döndürür  
  return{
    bookList:state.bookList
  }
}

export default connect(mapStateToProps)(App);//connect() fonksiyonu çağrıldığında yeni bir fonksiyon döndürdüğü için ikinci parantez var "()",
                                             //ikinci fonksiyon da bizim companent ımızı parametre olarak alıyor
                                             //connect() icine parametre olarak geçilen fonksiyon ikinci parantezdeki yazılan companente props olarak aktarılır
                                             //yani connnecte parametre olarak verilen mapStateToProps App e props olarak gönderildi App in içinde artık props.bookList denirse kitap listesinin tamamını alır

