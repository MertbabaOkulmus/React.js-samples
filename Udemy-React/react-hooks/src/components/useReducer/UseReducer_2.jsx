import React,{useReducer, useState} from "react";
import {ACTIONS} from "./actionTypes";
import Todo from "./Todo";

const guncelle=(todos,action)=>{
    switch (action.type) {
        case ACTIONS.TODO_EKLE:            
            return [...todos,yeniTodoEkle(action.payload.name)]  // elimdeki eski totdoları yazdır aynı şekilde ve gelen yeni name için yeni todo oluşturuyoruz
        case ACTIONS.TODO_SİL:
            return todos.filter(todo=>todo.id !==action.id) //silecek olan todo yu seçip filiteliyoruz
        case ACTIONS.TODO_TAMAMLA:      
            return todos.map(todo =>{
                if(todo.id===action.id){
                    return {...todo,tamam:true}
                }
                else{
                    return{...todo}
                }
            })
        default:   
            return todos;
    }
}

const yeniTodoEkle=(name)=>{
    return {id:Date.now(), name:name ,tamam:false}
}

const UseReducer_2 =()=>{

    const [todos,dispatch]=useReducer(guncelle,[]);//başangıç durumu boş dizi

    const [name,setName]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();//her yeni todo eklemede sayfayı refres etmesin diye yazıldı
        dispatch({type:ACTIONS.TODO_EKLE , payload:{name}}) //guncelleye gönderiyor(reducer) güncelleme için ,name i de gönderiyoruz inputun içinde yazanı
        setName("");//enter dan sonra inputun içini boşaltmak için
    }
console.log(todos);
    return(
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={name} 
                    onChange={e=>setName(e.target.value)}
                />
                {
                  todos.map(todo=>(
                      <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
                      //dispatch i göndermemizin sebebi sil ve tamamla butonunun Todo tarafında olması
                  ))
                }
            </form>
        </React.Fragment>
    )
}

export default UseReducer_2;