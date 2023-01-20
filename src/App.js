import Header from './components/Layout/Header';
import AvailableMeals from './components/Meals/AvailableMeals';
import MealsSummary from './components/Meals/MealsSummary';
function App() {
  return (
    <>
      <Header></Header>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
}

export default App;
