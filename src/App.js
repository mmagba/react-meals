import Header from './components/Layout/Header';
import AvailableMeals from './components/Meals/AvailableMeals';
import MealsSummary from './components/Meals/MealsSummary';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './store/CartProvider';
function App() {
  const [cartIsOpenState, setCartIsOpenState] = useState(false);

  const openCartHandler = () => {
    setCartIsOpenState(true);
  };

  const closeCartHandler = () => {
    setCartIsOpenState(false);
  }

  return (
    <CartProvider>
      {cartIsOpenState && <Cart closeCartHandler={closeCartHandler} />}
      <Header openCartHandler={openCartHandler} />
      <MealsSummary />
      <AvailableMeals />
    </CartProvider>
  );
}

export default App;
