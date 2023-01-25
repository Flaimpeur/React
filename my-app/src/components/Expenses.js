import Depense from './Depense';
import './Expenses.css';

function Expenses({myExpenses}) {
  return(
      <div>
        <h1>Composant Depense</h1>
        <ul>
        {myExpenses.map((element)=>{
          return <Depense depense = {element}/>;
        })}
        </ul>
      </div>
  );
};

export default Expenses;