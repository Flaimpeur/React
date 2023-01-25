import './App.css';
import Expenses from './components/Expenses.js';

function App() {
  const myBord = [
    {
      id : 'e1',
      name : 'Shovel',
      value : '35€',
      date : new Date(2022, 3, 10),
    },

    {
      id : 'e2',
      name : 'Cherry seed',
      value : '30€',
      date : new Date(2022, 3, 16),
    },

    {
      id : 'e3',
      name : 'Gaming Chair',
      value : '200€',
      date : new Date(2022, 9, 20),
    },

    {
      id : 'e4',
      name : 'New Screen',
      value : '169€',
      date : new Date(2022, 11, 12),
    },

    {
      id : 'e5',
      name : 'Bluetooth Headphone',
      value : '120€',
      date : new Date(2023, 0, 20)  
    },
  ];
  
  return (
    <div className='App-header'>
      <h1>Composant APP</h1>
      <Expenses myExpenses={myBord}/>
    </div>
  );
};

export default App;

// return (
//   <div className='App-header'>
//     <div className='App-B'>
        
//       <p className='DATE'>{myBord.map((el)=>(
//         <li key={el.date}>{el.date}</li>
//       ))}
//       </p>
       
//       <p className='NAME'>{myBord.map((el)=>(
//         <li key={el.name}>{el.name}</li>
//       ))}</p>

//       <p className='VALUE'>{myBord.map((el)=>(
//         <li key={el.value}>{el.value}</li>
//       ))}</p>

//     </div>
//   </div>
// );
