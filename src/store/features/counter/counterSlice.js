import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        addNumber: (state, { payload }) => {
            state.value += payload;
        },
        subNumber: (state, { payload }) => {
            state.value -= payload;
        },
    },
});

export const selectCounter = state => state.counter.value;

export const addNumberAsync = (payload) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(addNumber(payload));
        }, 1000);
    }
}

export const { addNumber, subNumber } = counterSlice.actions;
export default counterSlice.reducer;
