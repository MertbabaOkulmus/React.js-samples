import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect} from "react-router-dom";
import { Home } from "./components/Home";
import About  from "./components/About";
import { Colors } from "./components/Colors";
import NotFound from "./components/NotFound";

export default class App extends Component {
  constructor(props){
    super(props);
     this.state={
       redirect:false
     }
  }
  redirectToHell=()=>{
    this.setState ({redirect:true});
  }

  render() {

    const rgb = ["233", "632", "854"];
    return (
      <Router>
        {/*BrowserRouter un as ile kısaltılmış hali*/}
        <div className="App">
        {/*{this.state.redirect && <Redirect to="/hell" />} /*this.state.redirect true geldiginde /hell e git*/}

          {/* 
          <nav>
              <ul className="nav-links">
                <li>
                  <Link to={'/'}>Home</Link>  {/* a href yerine Link kullanmamızın sebebi dinamik olarak yönlendirme dir ve Link kullandığımızda page refresh olmaz sayfa yenilemez/}
                </li>
                <li>
                  <Link to={'/about'}>About</Link>{/*Link kullanım sebebi dinamki olup saydada refresh yapmaz/}
                </li>
                <li>
                  <Link to={'/colors'}>Colors</Link>
                </li>
              </ul>
            </nav>  
            */}
          
          <nav>
            {/* <button onClick={this.redirectToHell}>Redirect To Hell</button> */}
            {/*NavLink in Link den farkı linklere sitil verebiliyoruz, normalde linklere style vermeke için css kullanılır NavLink lerde ise bazı prop ları sayesinde renklendirme ler yapa bilmekteyiz*/}
            <NavLink
              exact
              to="/"
              activeStyle={{ fontWeight: "bold", color: "red" }}
            >
              {" "}
              Home{" "}
            </NavLink>
            <NavLink
              to="/about"
              activeStyle={{ fontWeight: "bold", color: "red" }}
            >
              {" "}
              About{" "}
            </NavLink>
            {rgb.map((code, id) => (
              <NavLink
                key={id}
                to={`/colors${code}`}
                activeStyle={{ fontWeight: "bold", color: "red" }}
              >
                {" "}
                Colors{" "}
              </NavLink>
            ))}
          </nav>
          <Switch>
            <Route path="/" exact component={Home} />
            {/*exact deyimi nin kullanım sebebi sadece / görünce home a git , eger /about yada /colors görürsen bunlar / a eşit değil o yuzden gitme / a eşit olana git demeke için kullanılır diger türlü /about a da /colors a da gidince  / sayfasını getirir*/}
            <Route path="/about" component={About} />
            <Route path="/colors:rgb" component={Colors} />
            {/* colors uzatısının parametre alabileceğii belirtmiş olduk :rgb ile
                params.rgb dedigimizde rgb deki değişkenlere ulaşa bileceğiz
            */}

            <Route path="*" component={NotFound} />
            {/*NotFoud sayfasının en aşağıda olması önemli çünki önce üstekileri kontrol edi ardından buraya giricek 
             path de ki * herhangi bişey yazılırsa anlamına geliyor, * = her ne yazılırsa yazlısın parametre olarak
    
            */}
          </Switch>
        </div>
      </Router>
    );
  }
}
