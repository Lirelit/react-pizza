import React from 'react'
import { Link } from 'react-router-dom'

import CartEmptyImg from '../assets/img/empty-cart.png'

export default function CartEmpty() {
  return (
    <div className="cart cart--empty">
            <h2>Корзина пустая <icon>😕</icon></h2>
            <p>
              Вероятнее всего, вы ещё не выбрали пиццу.<br />
              Для того, чтобы заказать пиццу, перейдите на главную страницу.
            </p>
            <img src={CartEmptyImg} alt="Empty cart" />
            <Link to="/" class="button button--black">
              <span>Вернуться назад</span>
            </Link>
          </div>
  )
}
