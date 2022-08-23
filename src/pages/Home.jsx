import React, { useContext, useEffect, useState } from 'react'
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { SearchContext } from '../App'
import { Categories } from '../components/Categories'
import Pagination from '../components/Pagination/Pagination'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Sort from '../components/Sort'
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice'
import { fetchPizzas } from '../redux/slices/pizzasSlice'

export default function Home() {
    const dispatch = useDispatch()

    const {items, status} = useSelector((state) => state.pizza) 
    const category = useSelector((state) => state.filter.categoryId)
    const selectedSort = useSelector((state) => state.filter.sort.sort)
    const sortOrder = useSelector((state) => state.filter.sortOrder)
    const currentPage = useSelector((state) => state.filter.currentPage)

    const { searchValue } = useContext(SearchContext)

    const onClickCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    const onChangeCurrentPage = (number) => {
        dispatch(setCurrentPage(number))
    }

    useEffect(() => {
        const search = searchValue ? `&search=${searchValue}` : ''
        const fetchData = async () => {
                dispatch(fetchPizzas({
                    currentPage,
                    category,
                    search,
                    selectedSort,
                    sortOrder
                }))
        }

        fetchData()
    }, [category, sortOrder, searchValue, selectedSort, currentPage])

 
    const pizzas = items.map((pizza, i) => (
        <PizzaBlock key={pizza.title} {...pizza} />
    ))
    const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />)

    return (
        <>
            <div className='content__top'>
                <Categories
                    value={category}
                    onClickCategory={onClickCategory}
                />
                <Sort value={selectedSort} />
            </div>
            <h2 className='content__title'>Все пиццы</h2>
            <div className='content__items'>
                {status == 'loading' ? skeletons : pizzas}
            </div>
            <Pagination onChangePage={onChangeCurrentPage} />
        </>
    )
}
