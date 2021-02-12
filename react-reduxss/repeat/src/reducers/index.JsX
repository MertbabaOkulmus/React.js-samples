import {ARTTIR,AZALT} from "../actions";

const INITIAL_STATE={
    sayac:0
}

export const reducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case ARTTIR:
            return{
                ...state,
                sayac:state.sayac+1
            }
        case AZALT:
            return{
                ...state,
                sayac:state.sayac-1
            }
        default:
            return state;
    }

}
