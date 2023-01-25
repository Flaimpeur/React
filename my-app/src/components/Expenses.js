import Depense from './Depense';
import './Expenses.css';
import Card from './Card.js'
import ExpenseDate from './ExpenseDate';

function Expenses({myExpenses}) {
  return(
      <Card className='expenses'>
        <ul>
        {myExpenses.map((element)=>{
          return <Depense key={element.id} depense = {element}/>;
        })}
        </ul>
      </Card>
  );
};

export default Expenses;