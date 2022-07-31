import React, { useState } from "react";

function Categories({value, onClickCategory}) {

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='categories'>
      <ul>
        {categories.map((category, index) => (
          <li  onClick={() => onClickCategory(index)} className={value === index ? "active" : ''} key={index}>{category}</li>
        
        ))}
      </ul>
    </div>
  );
}

export { Categories };
