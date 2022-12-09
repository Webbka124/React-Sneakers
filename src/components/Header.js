import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-50">
      <Link to="/">
        <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="" />
        <div>
          <h3>Webb Sneakers</h3>
          <p>Магазин лучших подкрадуль</p>
        </div>
      </div></Link>
      <ul className="d-flex">
        <li><Link to="/favorites"><img src='/img/favorite.svg' alt='favorite'/></Link></li>
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.png" alt="" />
          <span>1488 руб.</span>
        </li>
        <li>
          <img width={20} height={18} src="/img/user.png" alt="" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
