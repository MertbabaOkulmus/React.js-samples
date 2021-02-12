
const INITIAL_STATE={
    isLoding:false,
    countries:[],
    Errormessage:""
}

export const reducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case "GET_COUNTRIES_START":
            return{...state,isLoding:true, Errormessage:""}

        case "GET_COUNTRIES_SUCCESS":
            return {...state,countries:action.payload, isLoding:false}
        
        case "GET_COUNTRIES_ERROR":
            return {...state,Errormessage:action.payload, isLoding:false}
        default:
           return state;
    }
}