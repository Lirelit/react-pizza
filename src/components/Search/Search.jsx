import debounce from 'lodash.debounce'
import React, { useCallback, useContext, useRef, useState } from 'react'
import { SearchContext } from '../../App'
import styles from './style.module.scss'

const deb = debounce(() => {
    console.log('dratyti')
}, 2000)

export default function Search() {
    const [value, setValue] = useState('')
    const { setSearchValue } = useContext(SearchContext)

    const inputRef = useRef()

    const updateSearchValue = useCallback(
        debounce((str) => {
            setSearchValue(str)
        }, 800),
        []
    )

    const onChangeInput = (e) => {
        setValue(e.target.value)
        updateSearchValue(e.target.value)
    }

    const onClickClear = () => {
        setValue('')
        setSearchValue('')
        inputRef.current.focus()
    }

    return (
        <div className={styles.root}>
            <svg
                className={styles.icon}
                enableBackground='new 0 0 32 32'
                height='32px'
                version='1.1'
                viewBox='0 0 32 32'
                width='32px'
            >
                <g id='search_magnifier_magnifying_glass_loupe'>
                    <g id='search_funds_x2C__magnifying_glass_x2C__magnifier_x2C__loupe_1_'>
                        <g id='analysis_2_'>
                            <g>
                                <g>
                                    <g>
                                        <path
                                            d='M23.586,23.586c0.122-0.122,0.262-0.217,0.408-0.299l-2.276-2.277c-0.195-0.195-0.512-0.195-0.707,0        c-0.195,0.196-0.195,0.512,0,0.708l2.271,2.271C23.368,23.846,23.464,23.707,23.586,23.586z'
                                            fill='#263238'
                                        />
                                        <path
                                            d='M28.5,31c-0.667,0-1.295-0.26-1.768-0.732l-3.5-3.5C22.76,26.295,22.5,25.668,22.5,25        s0.26-1.295,0.732-1.768c0.906-0.906,2.629-0.906,3.535,0l3.5,3.5C30.74,27.205,31,27.832,31,28.5s-0.26,1.295-0.732,1.768        S29.167,31,28.5,31z M25,23.52c-0.407,0-0.793,0.152-1.061,0.42C23.656,24.223,23.5,24.6,23.5,25s0.156,0.777,0.439,1.061        l3.5,3.5c0.567,0.566,1.554,0.566,2.121,0C29.844,29.277,30,28.9,30,28.5s-0.156-0.777-0.439-1.061l-3.5-3.5        C25.793,23.672,25.407,23.52,25,23.52z'
                                            fill='#263238'
                                        />
                                    </g>
                                    <g>
                                        <path
                                            d='M13,22.45c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5c3.767,0,7.035-2.404,8.133-5.981        c0.081-0.264,0.361-0.415,0.625-0.331c0.264,0.081,0.413,0.36,0.332,0.624C20.861,19.763,17.209,22.45,13,22.45z'
                                            fill='#263238'
                                        />
                                    </g>
                                    <path
                                        d='M13,25C6.383,25,1,19.617,1,13S6.383,1,13,1s12,5.383,12,12S19.617,25,13,25z M13,2       C6.935,2,2,6.935,2,13s4.935,11,11,11s11-4.935,11-11S19.065,2,13,2z'
                                        fill='#263238'
                                    />
                                </g>
                            </g>
                        </g>
                    </g>
                    <circle cx='22' cy='13' fill='#263238' r='0.5' />
                </g>
            </svg>
            <input
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                placeholder='Поиск пиццы'
                className={styles.input}
            />
            {value && (
                <svg
                    onClick={onClickClear}
                    className={styles.clear}
                    height='22px'
                    viewBox='0 0 512 512'
                    width='512px'
                >
                    <path d='M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z' />
                </svg>
            )}
        </div>
    )
}
