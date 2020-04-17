import React from 'react'

function Interval({ currentInterval, setCurrentInterval }) {

    return (
        <div>
            <span>Интервал обновления секундомера: {currentInterval} сек.</span>
            <span>
                <button onClick={() => setCurrentInterval(prevInterval => prevInterval === 0 ? 0 : prevInterval - 1)}>-</button>
                <button onClick={() => setCurrentInterval(prevInterval => prevInterval + 1)}>+</button>
            </span>
        </div>
    )
}

export default Interval
