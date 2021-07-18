import { createSlice } from '@reduxjs/toolkit';

// Reducer
let lastId = 0;

const slice = createSlice({
  name: 'projects',
  initialState: [],
  reducers: {
    //action -> action handlers
    projectAdded: (projects, action) => {
      projects.push({
        id: ++lastId,
        project: action.payload.project,
      });
    },

  }
});

export const { projectAdded } = slice.actions;
export default slice.reducer;