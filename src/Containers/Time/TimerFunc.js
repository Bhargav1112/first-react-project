import React, { useEffect, useState } from 'react';

function TimerFunc(props) {
    const [timer, setTimer] = useState(new Date())

    useEffect(() => {
        const timeI = setInterval(() => {
            setTimer(new Date())
        }, 1000)
        return () => {
            clearInterval(timeI)
        }
    }, [])

    return (
        <div>
            <p>{timer.toLocaleTimeString()}</p>
        </div>
    );
}

export default TimerFunc;