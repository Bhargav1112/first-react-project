import React, { useState } from 'react';
import styles from './Counter.module.css'

function Counter() {
    const [count, setCount] = useState(0)

    const incrementHandler = () => {
        setCount(prevCount => prevCount < 10 ? prevCount + 1 : prevCount)
    }

    const decrementHandler = () => {
        setCount(prevCount => prevCount > 0 ? prevCount - 1 : prevCount)
    }

    return (
        <div className={styles.counterBox}>
            <p className={styles.counter}>{count}</p>
            <button type='button' onClick={decrementHandler}>Decrease</button>
            <button type='button' onClick={incrementHandler}>Increase</button>
        </div>
    );
}

export default Counter;