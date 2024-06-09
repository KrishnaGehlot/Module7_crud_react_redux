import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';



export const insert_user= createAsyncThunk('insert_user' , async(formvalue)=>{
    const res = await axios.post(`http://localhost:3000/user`, formvalue )
    return res;
})
export const get_user= createAsyncThunk('get_user' , async()=>{
  const res = await axios.get(`http://localhost:3000/user`,  )
  return res.data;
})
export const delete_user= createAsyncThunk('delete_user' , async(id)=>{
  const res = await axios.delete(`http://localhost:3000/user/${id}`, )
  return res;
})
export const userupdate=createAsyncThunk("userupdate",async(formvalue)=>{
  const res=await axios.patch(`http://localhost:3000/user/${formvalue.id}`,formvalue);
  return res;
})

export const UserSlice = createSlice({
  name: 'counter',
  initialState:{
   user:[]
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(get_user.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
  },
})


export const {  } = UserSlice.actions

export default UserSlice.reducer