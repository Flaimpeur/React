import './App.css';
import Expenses from './components/Expenses.js';

function App() {
  const myBord = [
    {
      id : 'e1',
      name : 'Shovel',
      value : '12.99€',
      date : new Date(2022, 3, 10),
    },

    {
      id : 'e2',
      name : 'Cherry seed',
      value : '9.99€',
      date : new Date(2022, 3, 16),
    },

    {
      id : 'e3',
      name : 'Gaming Chair',
      value : '215€',
      date : new Date(2022, 9, 20),
    },

    {
      id : 'e4',
      name : 'New Screen',
      value : '170€',
      date : new Date(2022, 11, 12),
    },

    {
      id : 'e5',
      name : 'Bluetooth Headphone',
      value : '120.50€',
      date : new Date(2023, 0, 20)  
    },
  ];
  
  return (
    <div className='App-header'>
      <Expenses myExpenses={myBord}/>
    </div>
  );
};

export default App;