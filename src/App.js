import React from 'react';
import Calculator from './components/Calculator'; 
import './index.css'; 

function App() {
    return (
        <div className="App">
            <header>
                <h1 className='animated-header'>Interactive Calculator with React by Bavajann</h1>
                <p>Welcome to the Interactive Calculator. Use this tool to perform basic arithmetic operations and switch between light and dark modes for a personalized experience.</p>
            </header>
            <section>
                <div className="calculator-container">
                    <Calculator />
                </div>
            </section>
            <footer>
                <p>&copy; 2024 Interactive Calculator. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
