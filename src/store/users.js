import { createSlice } from '@reduxjs/toolkit';

// Reducer
let lastId = 0;

const slice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    //action -> action handlers
    userAdded: (users, action) => {
      users.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },

  }
});

export const { userAdded } = slice.actions;
export default slice.reducer;