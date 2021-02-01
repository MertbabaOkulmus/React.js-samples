import React, { Component } from 'react'

class About extends Component {
    constructor(props){
        super(props);
      }
      
    
      degistirUrlHellile=()=>{
        this.props.history.push("/hell");//nerede Redirect To Hell butonunua basarsak bizi hell sayfasına götürsün
        /*push ile url değiştriirp sayfa yönlendirmesi yaptık */
      }
    render() {
        return (
            <div>
                About
            <button onClick={this.degistirUrlHellile}>Redirect To Hell</button>
            </div>
        )
    }
}

export default About