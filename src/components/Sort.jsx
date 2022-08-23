import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSort, setSortOrder } from '../redux/slices/filterSlice'

export default function Sort() {
    const dispatch = useDispatch()
    const sort = useSelector((state) => state.filter.sort)
    const sortOrder = useSelector((state) => state.filter.sortOrder)

    const [open, setOpen] = useState(false)
    const sortRef = useRef()
    const list = [
        { name: 'популярности', sort: 'rating' },
        { name: 'цене', sort: 'price' },
        { name: 'алфавиту', sort: 'title' },
    ]
    const listName = sort.name

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.path.includes(sortRef.current)) {
                setOpen(false)
            }
        }
        document.body.addEventListener('click', handleClickOutside)

        return () => {
            document.body.removeEventListener('click', handleClickOutside)
        }
    }, [])

    const onClickItemList = (obj) => {
        dispatch(setSort(obj))
        setOpen(false)
    }

    const handleSortOrder = () => {
        sortOrder == 'asc'
            ? dispatch(setSortOrder('desc'))
            : dispatch(setSortOrder('asc'))
        setOpen(false)
    }

    return (
        <div className='sort' ref={sortRef}>
            <div className='sort__label'>
                <svg
                    cursor='pointer'
                    onClick={handleSortOrder}
                    className={sortOrder === 'desc' ? 'rotate' : ''}
                    width='10'
                    height='6'
                    viewBox='0 0 10 6'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
                        fill='#2C2C2C'
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={() => setOpen(!open)}> {listName}</span>
            </div>
            {open && (
                <div className='sort__popup'>
                    <ul>
                        {list.map((obj, i) => (
                            <li
                                key={i}
                                onClick={() => onClickItemList(obj)}
                                className={
                                    sort.sort === obj.sort ? 'active' : ''
                                }
                            >
                                {obj.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
