import { createSlice } from "@reduxjs/toolkit";

interface Code {
    code: object  | string;
}

const initialState: Code | null = {
    code: "",
};

export const codeSlice = createSlice({
    name: "code",
    initialState,
    reducers: {
        setCode: (state, action) => {
            state.code = action.payload;
        },
        removeCode: (state) => {
            state.code = "";
        },
    },
});

export const { setCode, removeCode } = codeSlice.actions;

export default codeSlice.reducer;