import './App.css';
import Expenses from './components/Expenses.js';

function App() {
  const myBord = [
    {
      id : 'Shovel',
      value : '35€',
      date : '2022 April 10',
    },

    {
      id : 'Cherry seed',
      value : '30€',
      date : '2022 April 16',
    },

    {
      id : 'Gaming Chair',
      value : '200€',
      date : '2022 October 20',
    },

    {
      id : 'New Screen',
      value : '159€',
      date : '2022 December 12',
    },

    {
      id : 'Bluetooth Headphone',
      value : '120€',
      date : '2023 January 29',
    },
  ]
  

  return (
    <div className='App-header'>
      <h1>On recommence</h1>
      <Expenses items={myBord} />
    </div>
  );
}


// return (
//   <div className='App-header'>
//     <div className='App-B'>
        
//       <p className='DATE'>{myBord.map((el)=>(
//         <li key={el.date}>{el.date}</li>
//       ))}
//       </p>
       
//       <p className='ID'>{myBord.map((el)=>(
//         <li key={el.id}>{el.id}</li>
//       ))}</p>

//       <p className='VALUE'>{myBord.map((el)=>(
//         <li key={el.value}>{el.value}</li>
//       ))}</p>

//     </div>
//   </div>
// );


export default App;
