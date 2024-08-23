import React, { useState, useEffect } from 'react';
import '../styles/Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    // Function to handle button clicks and keypresses
    const handleClick = (value) => {
        if (value === '=') {
            try {
                setResult(eval(input).toString());
            } catch (error) {
                setResult('Error');
            }
            setInput('');
        } else if (value === 'C') {
            setInput('');
            setResult('');
        } else if (value === '←') {
            setInput(prevInput => prevInput.slice(0, -1));
        } else {
            setInput(prevInput => prevInput + value);
        }
    };

    // Function to handle keyboard input
    const handleKeyPress = (e) => {
        const key = e.key;
        if (key >= '0' && key <= '9') {
            handleClick(key);
        } else if (key === '+' || key === '-' || key === '*' || key === '/') {
            handleClick(key);
        } else if (key === 'Enter') {
            handleClick('=');
        } else if (key === 'Escape') {
            handleClick('C');
        } else if (key === 'Backspace') {
            handleClick('←');
        }
    };

    
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [input]);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={`calculator ${darkMode ? 'dark' : ''}`}>
            <div className="display">
                <input type="text" value={input} readOnly />
                <div className="result">{result}</div>
            </div>
            <div className="buttons">
                <button onClick={() => handleClick('C')}>C</button>
                <button onClick={() => handleClick('←')}>←</button>
                <button onClick={() => handleClick('/')}>&divide;</button>
                <button onClick={() => handleClick('*')}>&times;</button>
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('-')}>&minus;</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('+')}>+</button>
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('=')}>=</button>
                <button onClick={() => handleClick('0')} style={{ gridColumn: 'span 2' }}>0</button>
                <button onClick={() => handleClick('.')}>.</button>
            </div>
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    );
};

export default Calculator;
