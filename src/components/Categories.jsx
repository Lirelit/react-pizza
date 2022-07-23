import React, { useState } from "react";

function Categories() {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='categories'>
      <ul>
        {categories.map((categorie, index) => (
          <li  onClick={() => onClickCategory(index)} className={activeIndex === index ? "active" : ''} key={index}>{categorie}</li>
        
        ))}
      </ul>
    </div>
  );
}

export { Categories };
