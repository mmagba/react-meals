import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';


const Cart = props => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.totalAmount > 0;
    const cartItemAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 })
    };
    const cartItemRemoveHandler = item => {
        cartCtx.addItem({ ...item, amount: -1 })
    };

    return <Modal onClick={props.closeCartHandler}>
        <ul className={classes['cart-items']}>{cartCtx.items.map(item => <CartItem key={item.id} name={item.name}
            price={item.price} amount={item.amount} onRemove={cartItemRemoveHandler.bind(null, item)}
            onAdd={cartItemAddHandler.bind(null, item)}></CartItem>)}</ul>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button onClick={props.closeCartHandler} className={classes['button--alt']}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
}


export default Cart;