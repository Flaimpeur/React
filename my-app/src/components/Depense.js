import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './Depense.css'

function Depense(props) {
    return (
    <Card className='depense'>
        <ExpenseDate key={props.depense.id} date = {props.depense.date}/>
        <div className='depense__description'>
            <h2 className='depense h2'>{props.depense.name}</h2>
            <div className='depense__price'>{props.depense.value}</div>
        </div>
    </Card>
    );
};

export default Depense;