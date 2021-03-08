//reducer lar redux store da state leri günceller

import * as types from "../actions/types";

const initialState={
    currentChannel:null,//ilk değerde herhangi bir tıklanmış kanalımız yok

}

export default(state=initialState,action)=>{
    switch (action.type) {//type a göre yeni state oluşturacağız
        case types.SET_CURRENT_CHANNEL: // payload kısmında chanel taşıyor
            return{
                ...state,
                currentChannel:action.payload,
            };
    
        default:
        return{
            ...state
        };
    }
}