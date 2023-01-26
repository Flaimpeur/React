import Print from './Print';


function Peoples({items}) {
  return(
      <div>
        <ul>
        {items.map((element)=>{
          return <Print key={element.id} human = {element}/>;
        })}
        </ul>
      </div>
  );
};

export default Peoples;