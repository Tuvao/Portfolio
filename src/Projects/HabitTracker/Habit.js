import React from 'react';

export const Habit = ({ habit }) => {
    return (
        <div className='col-md-6'>
            <div className='habit-card p-3 mb-3 shadow-sm'>
                <h2>
                    {habit.name}
                </h2>
                <p>Streak: 3 days</p>
                <p className='star-rating'>****</p>
            </div>
        </div>
    )
}