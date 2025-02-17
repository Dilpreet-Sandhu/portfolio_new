import { createSlice } from "@reduxjs/toolkit";

interface MiscSlice {

    isSidebarOpen : boolean;

}

const initialState : MiscSlice = {
    isSidebarOpen : false,
}


const miscSlice = createSlice({
    name : "miscSlice",
    initialState,
    reducers : {

        setSidebar(state) {
            state.isSidebarOpen = !state.isSidebarOpen;
        }

    }
});

export const {setSidebar} = miscSlice.actions;

export default miscSlice;