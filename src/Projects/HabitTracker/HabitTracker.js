import React, { useState } from 'react';
import { habitData } from '../../Data/data';
import { Habit } from './Habit';
import "../../../CSS/habits.css";

export const HabitTracker = () => {
    const [habits, setHabits] = useState(habitData);

    return (
        <div className="container">
            <div className="row mt-2">
                <div className='col-12'>
                    <h1>Welcome to your personal habit tracker</h1>
                </div>
            </div>

            <a href="/habit-tracker/add-new">Add New Habit</a>

            <div className="row">
                {habits.map(habit => {
                    return <Habit habit={habit} key={habit.ID} />
                })}
            </div>
        </div >
    )
};