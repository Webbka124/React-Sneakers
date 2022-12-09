import React from "react";
import ContentLoader from "react-content-loader";

function Card({ id, name, imageUrl, price, onPlus, onFavorite, favorited = false, added = false, loading = false }) {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, name, price, imageUrl });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, name, price, imageUrl });
    setIsFavorite(!isFavorite);
  }

  return (
   <div className="card">
    
    {loading ? 
      (<ContentLoader
        speed={2}
        width={150}
        height={265}
        viewBox="0 0 150 265"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
          <rect x="1" y="0" rx="10" ry="10" width="150" heigh="155" />
          <rect x="0" y="167" rx="5" ry="5" width="150" heigh="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" heigh="15" />
          <rect x="1" y="234" rx="5" ry="5" width="180" heigh="25" />
          <rect x="118" y="230" rx="10" ry="10" width="32" heigh="32" />
      </ContentLoader>) :
      (<><div className="favorite" onClick={onFavorite}>
      <img className="Heart" 
      onClick={onClickFavorite}
      src= {isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="Unliked" />
    </div>

    <img width={133} height={112} src={imageUrl} alt="Sneakers" />
    <h5>{name}</h5>
    <div className="d-flex justify-between">
      <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>{price} руб.</b>
      </div>

      <img className="plus"
        onClick={onClickPlus}
        src={isAdded ? '/img/complete.svg' : '/img/plus.svg'}
        alt="Plus"
      />
    </div>
  </>)}
  
  </div>
    
    
        
  
)}

export default Card;

