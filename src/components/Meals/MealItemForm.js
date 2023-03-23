import classes from './MealItemForm.module.css';
import Input from '../UI/Input';
import { useRef } from 'react';

const MealItemForm = props => {

    const enteredAmountRef = useRef();
    const submitHandler = event => {
        event.preventDefault();
        //console.log(enteredAmountRef.current.value);
        const enteredAmountNumber = +enteredAmountRef.current.value;
        if (enteredAmountNumber > 0) {
            props.onAddToCart(enteredAmountNumber);
        }
    };


    return <form className={classes.form} onSubmit={submitHandler}>
        <Input ref={enteredAmountRef} label='Amount:' input={{
            id: 'amount' + props.id, type: 'number', min: '0', max: '15', step: '1',
            defaultValue: '0'
        }} />
        <button>+ Add</button>
    </form>
}

export default MealItemForm;