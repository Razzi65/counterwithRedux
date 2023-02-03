import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState: {count:10},
    reducers: {
        doIncerement: (state,action)=>{
            console.log(state.count);
            console.log(action.payload);
            

            let newState = {
                ...state,
                count: state.count + 1,

            } 
            return newState 
        },

        doDecrement:(state, action)=> {

            let newState = {
                ...state,
                count: state.count-1

            }
            return newState
        }
       
        
    }

})

export default counterSlice.reducer

export const {doIncerement, doDecrement} = counterSlice.actions