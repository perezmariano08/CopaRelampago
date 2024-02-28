import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    hidden: true
}

const planillaTimeSlice = createSlice({
    name: 'planillaTime',
    initialState: INITIAL_STATE,
    reducers: {
        toggleHiddenTime: (state) => {
            return {
                ...state,
                hidden: !state.hidden              
            }
        }
    }
})

export const {
    toggleHiddenTime
} = planillaTimeSlice.actions;

export default planillaTimeSlice.reducer;
