import './MyList.css'

function MyList(props) {
    return (
    <div className='list'>
        <div>
            <li>{props.data.name}
            <div>{props.data.age}</div>
            </li>
        </div>
    </div>
    );
};

export default MyList;