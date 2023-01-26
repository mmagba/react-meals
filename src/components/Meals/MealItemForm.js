import classes from './MealItemForm.module.css';
import Input from '../UI/Input';

const MealItemForm = props => {
    return <form className={classes.form}>
        <Input label='Amount' input={{ id: 'amount' + props.id, type: 'number', min: '0', max: '15', step: '1', defaultValue: '0' }} />
        <button>+ Add</button>
    </form>
}

export default MealItemForm;