import {data} from "../data";

const INITIAL_STATE={//(başlangıç durumu)
    bookList:data,
    cart:[]
};

export const reducer=(state=INITIAL_STATE,action)=>{ //state in başlanğıç durumu INITIAL_STATE, uygulama başladığında state initila_state değeri ile başlayacak
    switch (action.type) {
        case "SEPETE_EKLE":
            return{...state,cart:[...state.cart,action.payload]} // cart state nin içinden geliyor
            
        default:
            return state
    }
}