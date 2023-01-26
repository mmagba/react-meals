import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cartitems = [{ id: 'c1', name: 'Sushi', amount: '3', price: '33.60' }];

const Cart = props => {
    return <Modal onClick={props.closeCartHandler}>
        <ul className={classes['cart-items']}>{Cartitems.map(item => <li>{item.name}</li>)}</ul>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.45</span>
        </div>
        <div className={classes.actions}>
            <button onClick={props.closeCartHandler} className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
}


export default Cart;