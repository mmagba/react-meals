import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../store/CartContext';

const MealItem = props => {
    const cartCtx = useContext(CartContext);
    const addToCartHandler = amount => {
        cartCtx.addItem({
            name: props.name,
            price: props.price,
            id: props.id,
            amount: amount
        });
    };
    return <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{`$${props.price.toFixed(2)}`}</div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
        </div>
    </li>
};

export default MealItem;