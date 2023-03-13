import {createSlice} from '@reduxjs/toolkit';

interface initialStateTypes {
  isDarkMode: boolean;
  // colors: ColorsTypes
}

const INITIAL_STATE: initialStateTypes = {
  isDarkMode: false,
};

export const CommonSlice = createSlice({
  name: 'CommonSlice',
  initialState: INITIAL_STATE,
  reducers: {
    setTheme: (state, action) => {
      state.isDarkMode = action.payload;
      //   state.colors = lightThemeColors;
    },
  },
});

export const {setTheme} = CommonSlice.actions;
export default CommonSlice.reducer;
