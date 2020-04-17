import React, { useState, useEffect } from 'react'
import Interval from './Interval'

function TimerComponent() {
    const [isActive, setIsActive] = useState(false);
    const [currentTime, setCurrentTime] = useState(0)
    const [currentInterval, setCurrentInterval] = useState(1)

    function reset() {
        setIsActive(false)
        setCurrentTime(0)
      }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setCurrentTime((currTime) => currTime + currentInterval);
            }, currentInterval * 1000);
        } else if (!isActive && currentTime !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, currentTime, currentInterval]);


    return (
        <div>
            <Interval
                currentInterval={currentInterval}
                setCurrentInterval={setCurrentInterval}
            />
            <div>
                Секундомер: {currentTime} сек.
          </div>
            <div>
                <button onClick={() => setIsActive(true)}>Старт</button>
                <button onClick={() => reset()}>Стоп</button>
            </div>
        </div>
    )
}

export default TimerComponent
