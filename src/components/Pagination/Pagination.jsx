import React from 'react'
import ReactPaginate from 'react-paginate';
import styles from './style.module.scss'

export default function Pagination({onChangePage}) {
  return ( 
    <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=" >"
        previousLabel="< "
        onPageChange={event => onChangePage(event.selected + 1) }
        pageRangeDisplayed={4}
        pageCount={2}
        renderOnZeroPageCount={null}
      /> 
  )
}
