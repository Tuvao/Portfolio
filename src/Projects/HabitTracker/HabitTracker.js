import React, { useState } from 'react';

export const HabitTracker = () => {
    const [userInput, setUserInput] = useState("");

    return (
        <div className="container">
            <div className="row mt-2">
                <div className='col-12'>
                    <h1>Welcome to your personal habit tracker</h1>
                </div>
                <div className='col-12'>
                    <div className='alert alert-info'>
                        This page is in progress!
                    </div>
                </div>
            </div>
            <div className="row">
                <div className='col-12'>
                    <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
                    <button type='button' onClick={() => console.log(userInput)}>Click me</button>
                </div>
            </div>
        </div >
    )
};