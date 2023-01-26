import classes from './Header.module.css';
import foodImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';


const Header = props => {
    return <>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton openCartHandler={props.openCartHandler} />
        </header>
        <div className={classes['main-image']}>
            <img src={foodImage} alt="a table full of delecious food"></img>
        </div>
    </>
}

export default Header;