import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface LeaveState {
  data: any[];
}

const initialState: LeaveState = {
  data: []
};

const leaveSlice = createSlice({
  name: "leave",
  initialState,
  reducers: {
    createLeaveAdmin(state, action){

    }
  }
})

export const { createLeaveAdmin } = leaveSlice.actions

export default leaveSlice.reducer

// const fetchCreateLeaveAdmin = () => {
//   return async fetchCreateLeaveAdminThunk = (dispatch, getState) => {
//     try{
//       const res = await axios.post('/login', {
//         firstName: 'Finn',
//         lastName: 'Williams'
//       }); 
//     }
//   }
// }