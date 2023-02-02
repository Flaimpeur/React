import MyList from './MyList';
import './Peoples.css';


function Peoples({items}) {
  return(
      <div>
        <ul>
        {items.map((element)=>{
          return <MyList key={element.id} data = {element}/>;
        })}
        </ul>
      </div>
  );
};

export default Peoples;