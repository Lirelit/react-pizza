import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categoryId: 0,
    sort: {
        name: 'популярности',
        sort: 'rating',
    },
    sortOrder: 'asc',
    currentPage: 1
}

const filterSlice = createSlice({
    name:'filters',
    initialState,
    reducers: {
        setCategoryId(state, action){
            state.categoryId = action.payload
        },
        setSort(state, action){
            state.sort = action.payload
        },
        setSortOrder(state, action){
            state.sortOrder = action.payload
        },
        setCurrentPage(state, action){
            console.log(action);
            state.currentPage = action.payload
        }
    }
})

export const { setCategoryId, setSort, setSortOrder, setCurrentPage } = filterSlice.actions

export default filterSlice.reducer