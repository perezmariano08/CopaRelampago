import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    hidden: true
}

const planillaSlice = createSlice({
    name: 'planilla',
    initialState: INITIAL_STATE,
    reducers: {
        toggleHiddenAction: (state) => {
            return {
                ...state,
                hidden: !state.hidden              
            }
        }
    }
})

export const {
    toggleHiddenAction
} = planillaSlice.actions;

export default planillaSlice.reducer;
