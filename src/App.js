import Header from './components/Layout/Header';
import AvailableMeals from './components/Meals/AvailableMeals';
import MealsSummary from './components/Meals/MealsSummary';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartContext from './store/CartContext';
function App() {
  const [cartIsOpenState, setCartIsOpenState] = useState(false);

  const openCartHandler = () => {
    setCartIsOpenState(true);
  };

  const closeCartHandler = () => {
    setCartIsOpenState(false);
  }

  return (
    <CartContext.Provider>
      {cartIsOpenState && <Cart closeCartHandler={closeCartHandler} />}
      <Header openCartHandler={openCartHandler} />
      <MealsSummary />
      <AvailableMeals />
    </CartContext.Provider>
  );
}

export default App;
