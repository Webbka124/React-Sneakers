import Card from "../components/Card";




function Home({
    items,
    searсhValue,
    setSearchValue,
    onAddToCart,
    onChangeSearchInput,
    onAddToFavorites,
    cartItems,
    isLoading }) {
    
      const renderItems = () => {
        const filtredItems = items.filter( (item) => item.name.toLowerCase().includes(searсhValue.toLowerCase()))
        return (isLoading ? [...Array(8)] : filtredItems)
          
          .map((item, index) => (
            <Card 
            key={index}
            onFavorite = {(obj) => onAddToFavorites(obj)}
            onPlus = {(obj) => onAddToCart(obj)}
            added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
            loading={isLoading}
            {... item}
            />
          ))
      }

    return (
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searсhValue ? `Поиск по запросу: "${searсhValue}"` : 'Все подкрадули'}</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            {searсhValue && (
            <img
            onClick={() => setSearchValue('')} 
            className = "clear"
            src="/img/btn-remove.svg" 
            alt="Clear"
            />
          )}
            <input onChange={onChangeSearchInput} value={searсhValue} placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {renderItems()}
        </div>
      </div>
    )
}

export default Home;