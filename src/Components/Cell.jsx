import './Cell.css';

function Cell(props) {
    return (
        <div 
            className={`cellWrapper ${
                props.value !== "+"
                    ? props.value === "X"
                        ? "redBg"
                        : "blueBg"
                    : ""
            }`}
            onClick={props.onClick}
        >
            {props.value}
        </div>
    );
}

export default Cell;