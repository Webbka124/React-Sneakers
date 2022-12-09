function Drawer ({ onClose, onRemove, items = []} ) {
    return (
        <div className="overlay">
    <div className="drawer">
    <h2 className="d-flex justify-between mb-30">Корзина <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" />
    </h2>

    {
      items.length > 0 ? 
      <div><div className="items">
      {items.map ((obj) => (
        <div key={obj.id} className="cartItem d-flex align-center mb-20">
        <div 
        style={{ backgroundImage: `url(${obj.imageUrl})` }}
        className="cartItemImg"></div>
          
        <div className="mr-20">
          <p className="mb-5">{obj.name}</p>
          <b>{obj.price}</b>
        </div>
        <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
      </div>
      ))}
      </div>
      <div className="cartTotalBlock"><ul>
    <li>
      <span>Итого:</span>
      <div></div>
      <b>21.498 руб.</b>
    </li>
  </ul>
  
  <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow"/></button>
  </div>
      </div>
     :
    <div class="cartEmpty d-flex align-center justify-center flex-column flex">
    <img class="mb-20" width={120} height={120} src="/img/box.jpg" alt="box"></img>  
    <h2>Корзина пустая</h2>
    <p class="opacity-6">Добавьте хотя бы одну пару подкрадуль, чтобы сделать заказ.</p>
    <button class="greenButton">
      <img src="/img/arrow.svg" alt="arrow" />
      Вернуться назад
    </button>
    </div>
    }

    

  
  </div>
  </div>
  );
}

export default Drawer;