import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    hidden: true,
    navigationSource: '',
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
        },
        setNavigationSource: (state, action) => {
            state.navigationSource = action.payload
        },
    }
})

export const {
    toggleHiddenAction, setNavigationSource
} = planillaSlice.actions;

export default planillaSlice.reducer;
