import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MultiplyState {
    value: number;
}

const initialState: MultiplyState = {
    value: 1,
};

export const multiplySlice = createSlice({
    name: "multiply",
    initialState,
    reducers: {
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value *= action.payload;
        },
        reset: (state) => {
            state.value = initialState.value;
        },
    },
});

export const { incrementByAmount, reset } = multiplySlice.actions;
export default multiplySlice.reducer;
