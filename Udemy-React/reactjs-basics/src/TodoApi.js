import React, { Component } from 'react'

 class TodoApi extends Component {
    state={
     todos:[],
     isLoading:true
    }
    componentDidCatch(){
        this.fetchTodos();
    }
    fetchTodos(){
        fetch("https://jsonplaceholder.typicode.com/todos")//link deki verileri yakala
        .then(response=>response.json())//yakaladıktan sonra dönen veriyi json formatına çevir
        .then(todolar =>{
           this.setState({
                todos:todolar,
                isLoading:false
           })
        })//sonra ise burdaki todo ları al todos a aktar ve ardından isLoading i false yap
        .catch(error=>{
            console.error(error)
        })
    }
    render() {
        const {isLoading,todos}=this.state
        return (
            <div>
                {
                    isLoading ? //true yüklendi kısmı 
                   (todos.map(todo=>{
                       return(                        
                            <p>{todo.title}</p>           
                       )
                   }))

                    :   
                   ( <h1> Hala yükleniyor :( </h1> )// hala yükelniyorsa olan kısım
                }
            </div>
        )
    }
}
export default TodoApi