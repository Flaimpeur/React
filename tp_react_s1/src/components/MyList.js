

function MyList(props) {
    return (
    <div>
        <div>
            <li>{props.data.name}
            <div>{props.data.age}</div>
            </li>
        </div>
    </div>
    );
};

export default MyList;