import React from "react";
import {ACTIONS} from "./actionTypes";

const Todo =({todo,dispatch})=>{
    return(
        <div>
            <ul>
                <li style={{background: todo.tamam ? "#850":"#000"}}>{todo.name}</li>
                <button onClick={()=>dispatch({type:ACTIONS.TODO_TAMAMLA, id:todo.id})}>Tamamla</button>
                <button onClick={()=>dispatch({type:ACTIONS.TODO_SİL, id:todo.id})}>Sil</button>
            </ul>
        </div>
    )
}

export default Todo;