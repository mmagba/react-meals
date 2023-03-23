import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/CartContext';
import { useState, useContext, useEffect } from 'react';

const HeaderCartButton = props => {

    const cartCtx = useContext(CartContext);

    const numberOfItems = cartCtx.items.reduce((numOfItems, item) => {
        return numOfItems + item.amount;
    }, 0);


    const [buttonClasses, setButtonClasses] = useState(classes.button);

    useEffect(() => {
        setButtonClasses((prev) => { return classes.button + ' ' + classes.bump });
        console.log('effect inside code', buttonClasses, numberOfItems);
        const timer = setTimeout(() => {
            setButtonClasses((prev) => classes.button);
        }, 300);

        return () => {

            clearTimeout(timer);
            console.log('cleanup func', buttonClasses, numberOfItems);
        };
    }, [numberOfItems]);

    console.log('Main console', buttonClasses, numberOfItems);

    return <button className={buttonClasses} onClick={props.openCartHandler}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfItems}</span>
    </button>
}


export default HeaderCartButton;