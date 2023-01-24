// import logo from './logo.svg';
import './App.css';

function App() {
  const myBord = [
    {
      id : 'Shovel',
      value : '35€',
      date : 'April 2022 10'
    },

    {
      id : 'Cherry seed',
      value : '30€',
      date : 'June 2022 06'
    },

    {
      id : 'Gaming Chair',
      value : '200€',
      date : 'octobre 2022 20'
    },

    {
      id : 'New Screen',
      value : '159€',
      date : 'December 2022 12'
    },

    {
      id : 'Bluetooth Headphone',
      value : '120€',
      date : 'January 2023 29'
    },
  ]
  

  return (
    <div className='App-header'>
      <div className='App-B'>
          
        <p className='DATE'>{myBord.map((el)=>(
          <li key={el.date}>{el.date}</li>
        ))}
        </p>
         
        <p className='ID'>{myBord.map((el)=>(
          el.id
        ))}</p>

        <p className='VALUE'>{myBord.map((el)=>(
          el.value
        ))}</p>

      </div>
    </div>
  );
}

export default App;
