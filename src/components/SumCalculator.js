import React, { useState, useEffect } from 'react';

const SumCalculator = () => {
    const [numbers, setNumbers] = useState([]);
    const [sum, setSum] = useState(0);

    const handleInputChange = (event) => {
        const value = event.target.value;
        if (!isNaN(value) && value !== '') {
            setNumbers(prevNumbers => [...prevNumbers, parseInt(value)]);
        }
    };

    useEffect(() => {
        const calculateSum = () => {
            const total = numbers.reduce((acc, num) => acc + num, 0);
            setSum(total);
        };

        calculateSum();
    }, [numbers]);

    return (
        <div>
            <h1>Sum Calculator</h1>
            <input type="number" onChange={handleInputChange} />
            <p>Sum: {sum}</p>
        </div>
    );
};

export default SumCalculator;