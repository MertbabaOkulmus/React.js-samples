import {createSlice} from '@reduxjs/toolkit'
//import { stat } from 'fs-extra'

export const counterSlice =createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increment: state => {
            state.value++;
        },
        decrement: state => {
            state.value--;
        },
        incrementAmount: (state,action)=>{
            state.value +=action.payload;
        }
    }
});

export const {increment,decrement,incrementAmount}=counterSlice.actions;
export const selectCount= state =>state.counter.value;
export default counterSlice.reducer;