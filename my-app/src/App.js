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
      id : 'Bluetooht Headphone',
      value : '120€',
      date : 'January 2023 29'
    },
  ]
  

  return (
    <div className='App-header'>
      <p>{myBord.map((el)=>(
        el.id
      ))}</p>

      <p>{myBord.map((el)=>(
        el.value
      ))}</p>

      <p>{myBord.map((el)=>(
        el.date
      ))}</p>


    </div>
  );
}

export default App;
