import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    hidden: true
}

const planillaAsist = createSlice({
    name: 'asist',
    initialState: INITIAL_STATE,
    reducers: {
        toggleHiddenAsist: (state) => {
            return {
                ...state,
                hidden: !state.hidden              
            }
        }
    }
})

export const {
    toggleHiddenAsist
} = planillaAsist.actions;

export default planillaAsist.reducer;
