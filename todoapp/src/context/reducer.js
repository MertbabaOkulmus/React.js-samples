export const initialState={
    todos:[],
};

const reducer =(state,action)=>{
    console.log(action);

    switch (action.type){
        case 'ADD_TODO':
            return{
                ...state,
                todos:[action.payload,...state.todos],
            };
        case 'REMOVE_TODO':
            return{
                ...state,
            todos:[...state.todos /*yeni bir dizi kopyası oluşturuldu*/].filter(todo=>todo.id != action.payload)//filiter ile silien todo nun id si hariç geri kala todo lar todos a döndürülür bu saydede silinen todo gözükmez
            };
        case 'COMPLETE_TODO':
            return{
                ...state,
                todos:state.todos.map((todo)=>{
                    if(todo.id !== action.payload){
                        return todo;
                    }
                    return{
                        ...todo,
                        isCompleted: !todo.isCompleted  //true ise false , false ise true haline çevirir
                    }
                })
            };
        case 'UPDATE_TODO':
            return{
                ...state,
                todos:state.todos.map((todo)=>{
                    if(todo.id !== action.payload.todoId){
                        return todo;
                    }
                    return{
                        ...todo,
                        content:action.payload.newValue,
                    }
                })
            };
        default:
            return{
                ...state,
            };
    }

};  

export default reducer;