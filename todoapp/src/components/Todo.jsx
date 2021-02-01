import React,{useState} from 'react'
import {GrFormClose, GrFormEdit, GrFormCheckmark} from "react-icons/gr";
import {useTodoLayerValue} from "../context/TodoContext";
import clsx from "clsx";

const Todo = ({todo}) => {
    const [{},dispatch]=useTodoLayerValue();
    const [editable, seteditable]=useState(false);
    const [content, setContent] = useState(todo.content);
    const removeTodo=(todoId)=>{
        dispatch({
        type:'REMOVE_TODO',
        payload:todoId,
        })
    }

    const completeTodo=(todoId)=>{
        dispatch({
        type:'COMPLETE_TODO',
        payload:todoId,
        })
    }

    const updateTodo=({todoId,newValue})=>{
        dispatch({
        type:'UPDATE_TODO',
        payload:{
            todoId,
            newValue    
        },
        })
    }

const todoStyle=clsx({
    ['todo-row']:true, //herzaman true ol
    ['completed']:todo.isCompleted, // todo.isCompleted deki değere göre true yada false olur , true olunca css eklenir, false olunca eklenmez css özelliği , böyle bir mantığı var    
})

    return (
        <div className={todoStyle}>
            <div onClick={()=>completeTodo(todo.id)}>   
                {
                    editable ? 
                    <input type="text" value={content} onChange={event =>setContent(event.target.value)} className="todo-input-edit"/>//edittable true ise bu alan gelsin ,yani düzenleme aktif olsun
                    :
                    todo.content // düzenleme ye basılmadı ise yani false ise bu alan gelsin 
                }
            </div>

            <div className="todo-icons">
             <GrFormClose className="todo-icon" onClick={()=>removeTodo(todo.id)}/>
             {
                 editable ? 
                 <GrFormCheckmark className="todo-icon" onClick={()=>{
                     updateTodo({
                         todoId:todo.id,
                         newValue:content
                     })
                     setContent("");
                     seteditable(false);
                 }}/> :  
                 <GrFormEdit className="todo-icon" onClick={()=>seteditable(true)} />
             }
            
            </div>
        </div>
    )
}

export default Todo
