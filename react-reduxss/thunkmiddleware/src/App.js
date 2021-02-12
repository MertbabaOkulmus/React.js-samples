import React, { useEffect } from "react";
import "./styles.css";
import { connect } from "react-redux";
import { getCountries } from "./actions";

const App = props => {

  useEffect(() => {
    props.getCountries();
  }, [])

  return (
    <div className="App">
      <h1>React Dersleri</h1>
      <h2>React Router</h2>
      {props.isLoding ? <p><img src="https://i.pinimg.com/originals/a2/dc/96/a2dc9668f2cf170fe3efeb263128b0e7.gif" alt="isLoding"></img></p>:props.countries.map(country => {
        return (
          <div key={country.name}>
            <h3>{country.name}</h3>
            <h4>{country.capital}</h4>
            <p>
              <img
                src={country.flag}
                alt={country.name}
                style={{ width: "100px" }}
              />
            </p>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {//state den gelen değerleri aldığımız yer 
  return {
    countries: state.countries,
    isLoding: state.isLoding
  };
};

export default connect(mapStateToProps, { getCountries })(App);