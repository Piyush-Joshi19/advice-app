import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    data:null,
}

export const adviceSlice = createSlice({
    name: "advice",
    initialState,
    reducers:{
        setIsLoading : (state,action) => {
          return {...state,isLoading:action.payload}  
        },
        getAdvices:(state,action) => {
            return {...state,data:action.payload}
        }
    }

})

export const {setIsLoading,getAdvices} = adviceSlice.actions;

export default adviceSlice.reducer;