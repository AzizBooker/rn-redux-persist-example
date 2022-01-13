import { createSlice } from "@reduxjs/toolkit";

const initialState={
    list:[1,2,3]
}


 const listSlice=createSlice({
    name:'list',
    initialState,
    reducers:{
        PushToList:(state)=>{

        }
    }
})

export const {PushToList} = listSlice.actions

export default listSlice.reducer