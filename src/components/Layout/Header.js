import classes from './Header.module.css';
import foodImage from '../../assets/meals.jpg';


const Header = props => {
    return <>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={foodImage} alt="a table full of delecious food"></img>
        </div>
    </>
}

export default Header;