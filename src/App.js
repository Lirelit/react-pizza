import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import "./scss/app.scss";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://62dae988d1d97b9e0c48e3c3.mockapi.io/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
        window.scroll(0, 0);
      });
  }, []);
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <Routes>
          <Route path="/" element={<Home items={items} isLoading={isLoading} />}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="cart" element={<Cart/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
