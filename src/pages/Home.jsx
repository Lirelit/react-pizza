import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../App';


import { Categories } from '../components/Categories'
import Pagination from '../components/Pagination/Pagination';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Sort from '../components/Sort'

export default function Home() {
    const {searchValue} = useContext(SearchContext)
    const [items, setItems] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [category, setCategory] = useState(0)
    const [selectedSort, setSelectedSort] = useState({
        name: 'популярности',
        sort: 'rating',
    })
    const [sortOrder, setSortOrder] = useState('asc')
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const search = searchValue ? `&search=${searchValue}`: ''

        setLoading(true)
        fetch(
            `https://62dae988d1d97b9e0c48e3c3.mockapi.io/items?page=${currentPage}&limit=8${
                category > 0 ? `&category=${category}` : ''
            }${search}&sortBy=${selectedSort.sort}&order=${sortOrder}`
        )
            .then((res) => res.json())
            .then((data) => {
                setItems(data)
                setLoading(false)
            })
    }, [category, selectedSort, sortOrder, searchValue, currentPage])

    const pizzas = items.map((pizza, i) => <PizzaBlock key={pizza.title} {...pizza} />)
    const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />)

    return (
        <>
            <div className='content__top'>
                <Categories
                    value={category}
                    onClickCategory={(id) => setCategory(id)}
                />
                <Sort
                    value={selectedSort}
                    onChangeSort={(id) => setSelectedSort(id)}
                    sortOrder={sortOrder}
                    onChangeOrderSort={(p) => setSortOrder(p)}
                />
            </div>
            <h2 className='content__title'>Все пиццы</h2>
            <div className='content__items'>
                {isLoading ? skeletons : pizzas}
            </div>
            <Pagination onChangePage={(number)=> setCurrentPage(number)}/>
        </>
    )
}
