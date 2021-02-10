import React, {useState} from "react";
import "./styles.css";
import { connect } from "react-redux";
import { listeyeEkle,listeyiIsaretle,temizle } from "./actions";


const App=props=> {
  console.log(props);
  const [text, setText] = useState("");
  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input placeholer="listeye ekle" value={text} onChange={event=>setText(event.target.value)}/>
        <button onClick={()=>{props.listeyeEkle(text);setText("")}}>Ekle</button>
      </div>
      <div className="liste">
        {props.Liste.map(item => (
          <div key={item.id} className={item.tamamlandi ? "yapildi" : ""} onClick={()=>props.listeyiIsaretle(item.id)}>{item.baslik}</div>
        ))}
      </div>
      <button className="temizle" onClick={()=>props.temizle()}>Tamamlananları Temizle</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    Liste: state.liste
  };
};


export default connect(mapStateToProps, { listeyeEkle,listeyiIsaretle,temizle})(App);
