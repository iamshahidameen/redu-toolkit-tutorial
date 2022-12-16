import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';
// import cartItems from './cartItems';

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
