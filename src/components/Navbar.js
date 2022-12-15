import { CartIcon } from '../icons';
import { useSelector } from 'react-redux/es/exports';

const Navbar = () => {
  const { amount, total } = useSelector((store) => store.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Toolkit {total}</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;