import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const handleIncrement2 = () => {
        setCount(count => count + 1);
        setCount(count => count + 1);
    };

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleIncrement2}>
                Click me
            </button>
        </div>
    );
}

export default Counter
