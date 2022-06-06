import react, { useState } from "react";

const Container = ({ setCounter }) => {
    return <div className="wrapper">
        <AddOneButton setCounter={setCounter} />
    </div>
}

const AddOneButton = ({ setCounter }) => {
    return (
        <div className="wrapper">
            <button onClick={() => setCounter((v) => ++v)}>Add One</button>
        </div>
    );
}

const Counter = ({ counter }) => <div className="wrapper">Counter: { counter } </div>;

export default function CounterUseState() {
    const [ counter, setCounter ] = useState(0);
    return (
        <div className="wrapper">
            <Container setCounter={setCounter} />
            <Counter counter={ counter }/>
        </div>
    );
}