import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    async (params) => {
        const { currentPage, category, search, selectedSort, sortOrder } = params
        const {data} = await axios.get(
            `https://62dae988d1d97b9e0c48e3c3.mockapi.io/items?page=${currentPage}&limit=8${
                category > 0 ? `&category=${category}` : ''
            }${search}&sortBy=${selectedSort}&order=${sortOrder}`
        )
        console.log(data);
        return data
    }
)

const initialState = {
    items: [],
    status: 'loading'
}

const pizzasSlice = createSlice({
    name: 'pizza',
    initialState,
    // reducers: {
    //     setItems(state, action) {
    //         // state.items = action.payload
    //     },
    // },
    extraReducers: {
        [fetchPizzas.pending]: (state) => {
            state.status = 'loading'
            state.items = []
        },
        [fetchPizzas.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = 'success'
        },
        [fetchPizzas.rejected]: (state) => {
            state.status = 'error'
            state.items = []
        }
    }
})

// export const { setItems } = pizzasSlice.actions

export default pizzasSlice.reducer
