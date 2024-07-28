import { createSlice } from "@reduxjs/toolkit";


interface User {
    user: {
        username: string;
        email: string;
        id: number;
    };
}

const initialState: User | null = {
    user: {
        id: 0,
        username: "",
        email: "",
    },
};



export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
        console.log(action.payload);
      state.user = action.payload;
    },
    removeUser: (state) => {
        state.user = {
            id: 0,
            username: "",
            email: "",
        }
        },

  },
});

export const { setUser,removeUser } = userSlice.actions;

export default userSlice.reducer;
