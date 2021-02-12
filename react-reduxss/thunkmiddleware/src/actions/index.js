//actionlar birer objedir, type değeri zorunludur payload u opsyonel olan birer objedir
import axios from "axios";

export const getCountries = () => dispatch => {//getCountries bir fonksiyon ve geriye bir fonksiyon döndürür geriye dönen fonksiyona da dispatch i parametre olarak alır

    dispatch({ type: "GET_COUNTRIES_START" });
    setTimeout(() => {//isLoding i görmek için setTimeout u koyduk
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then(response => dispatch(
                { type: "GET_COUNTRIES_SUCCESS", payload: response.data }
            ))
            .catch(error => dispatch({ type: "GET_COUNTRIES_ERROR", payload: error }))
    }, 2500);

};