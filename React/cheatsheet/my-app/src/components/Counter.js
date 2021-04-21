import {useState} from 'react'

export default function Counter() {

    // const state = useState(0);
    // const count = state[0];
    // const setCount = state[1];

    const [count, setCount] = useState(0); //cero es el valor incial

    const handleClick = function () {
        setCount(count + 1);
        console.log(count, setCount);
    }

    return (
        <div>
            <p>Has hecho click {count} veces.</p>
            <button onClick={handleClick}>Pincha aquí!</button>
            <button onClick={() => setCount(count - 1)}>Bajar</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}
