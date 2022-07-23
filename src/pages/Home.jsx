import React, { useEffect, useState } from "react";

import { Categories } from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort from "../components/Sort";

export default function Home() {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("https://62dae988d1d97b9e0c48e3c3.mockapi.io/items")
        .then((res) => res.json())
        .then((data) => {
          setItems(data);
          setLoading(false);
        });
    }, []);

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
