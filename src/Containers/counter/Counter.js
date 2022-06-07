import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0)

    const incrementHandler = () => {
        setCount(prevCount => prevCount < 10 ? prevCount + 1 : prevCount)
    }

    const decrementHandler = () => {
        setCount(prevCount => prevCount > 0 ? prevCount - 1 : prevCount)
    }

    return (
        <div>
            <p>{count}</p>
            <button type='button' onClick={incrementHandler}>Increase</button>
            <button type='button' onClick={decrementHandler}>Decrease</button>
        </div>
    );
}

export default Counter;