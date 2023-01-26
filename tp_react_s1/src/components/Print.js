

function Print(props) {
    return (
    <div>
        <div>
            <h2>{props.human.name}</h2>
            <div>{props.human.age}</div>
        </div>
    </div>
    );
};

export default Print;