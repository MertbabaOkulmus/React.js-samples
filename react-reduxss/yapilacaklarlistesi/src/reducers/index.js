import { EKLE, ISARETLE, TEMIZLE } from "../actions";
const baslangic_durumu = {
    liste: [
        { id: 1, baslik: 'Alişveriş Yap', tamamlandi: false },
        { id: 2, baslik: 'Fatura öde', tamamlandi: true }
    ]
};

export const reducer = (state = baslangic_durumu, action) => {
    switch (action.type) {
        case EKLE:
            return { ...state, liste: [...state.liste, { id: state.liste.length + 1, baslik: action.payload, tamamlandi: false }] };

        case ISARETLE:
            return {
                ...state,
                liste: state.liste.map(item => 
                    item.id === action.payload
                    ? {...item, tamamlandi: !item.tamamlandi} : item
                )  
            };
        
        case TEMIZLE:
            return{
                ...state,
                liste:state.liste.filter(item=>
                    item.tamamlandi === !action.payload 
                ) //item.tamamlandi === !action.payload  olanları filitrele geri kalanı at yani true ları atar false olanları tutar
            }
        default:
            return state;

    }
}