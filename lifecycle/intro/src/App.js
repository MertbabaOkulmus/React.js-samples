import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {

  state={
    users:[], 
    isloading:false
  };

  componentDidMount() {
    setTimeout(() => {
      
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(deneme=>deneme.data).then(deneme=>{
      this.setState({
        users:deneme,
        isloding:true
      })
    })
  }, 2000);
  }
  
  render() {
    return (
      <div>
        <h1>Users</h1> 
        <h1>{this.state.isloading ? "":"Loding..."}</h1>
       {   
         this.state.users.map(users=>
         <div key={users.id}>
           {
            users.name
           }
           &&
           {
            users.email
           }     
         </div>
         )
       }
      </div>
    )
  }
}
export default App;
