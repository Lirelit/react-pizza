import React from "react";

import { Categories } from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort from "../components/Sort";

export default function Home(props) {
   const {items, isLoading} = props

  return (
    <>
      <div className='content__top'>
       <Categories/>
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : items.map((pizza, i) => (
              <PizzaBlock key={pizza.title} {...pizza} />
            ))}
      </div>
    </>
  );
}
