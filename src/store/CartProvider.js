import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        let updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price;

        const indexResult = state.items.findIndex(item => item.id === action.item.id);
        let updatedItems;
        const existingCartItem = state.items[indexResult];
        if (indexResult === -1) {
            updatedItems = state.items.concat(action.item);
        } else {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[indexResult] = updatedItem;
        }

        //remove items that have 0 amount
        updatedItems = updatedItems.filter(item => item.amount !== 0)
        //check if no items are in cart and update amount to 0
        if (updatedItems.length === 0) {
            updatedTotalAmount = 0;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
}
const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = item => {
        dispatchCartAction({ type: 'ADD', item: item });
    };
    const removeItemFromCartHandler = id => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;