
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import React from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router";
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [items, setItems] = React.useState([]);
  const [searсhValue, setSearchValue] = React.useState('');
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favorites, setFavorites] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  
  
  
  React.useEffect(() => {
     async function fetchData () { 
      const cartResponse = await axios.get('https://6359bb1738725a1746b6e908.mockapi.io/cart');
      const favoritesResponse = await axios.get('https://6359bb1738725a1746b6e908.mockapi.io/favorites');
      const itemsResponse = await axios.get('https://6359bb1738725a1746b6e908.mockapi.io/items');

      setIsLoading(false);
      
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
     }

     fetchData();
  }, []);

  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((item) => Number( item.id) === Number(obj.id))) {
        axios.delete(`https://6359bb1738725a1746b6e908.mockapi.io/cart/${obj.id}`);
        setCartItems(prev => prev.filter(item => Number( item.id) !== Number(obj.id)));
      } else {
        axios.post('https://6359bb1738725a1746b6e908.mockapi.io/cart', obj);
        setCartItems((prev) => [ ...prev, obj]);
      }
      
    }
    catch (error) {
      alert('Не удалось добавить в корзину')
    }
  };

  const onAddToFavorites = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://6359bb1738725a1746b6e908.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      const { data } = await axios.post('https://6359bb1738725a1746b6e908.mockapi.io/favorites', obj);
      setFavorites((prev) => [ ...prev, data]);
    }
    } catch (error) {
      alert('Не удалось добавить в избранное')
    }

  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6359bb1738725a1746b6e908.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
    
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  
  };

  return (
    <div className="wrapper clear">
      {cartOpened ? (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
      <Route path="/" element={
      <Home
      cartItems={cartItems}
      items={items}
      searсhValue={searсhValue}
      setSearchValue={setSearchValue}
      onAddToCart={onAddToCart}
      onChangeSearchInput={onChangeSearchInput}
      onAddToFavorites={onAddToFavorites}
      isLoading={isLoading} 
      />
      }
      />

      <Route path="/favorites" element={
      <Favorites
      items={favorites}
      onAddToFavorites={onAddToFavorites}/>
      }
      />


        </Routes>    

      
    </div>
  );
}

export default App;
