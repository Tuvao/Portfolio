import React, { useState } from "react";

export const CreateNewHabit = () => {
let [habitName, setHabitName] = useState("");

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Add new habit</h1>
                </div>
                <div className="col-12">
                    I want to: (start/remove) a habit
                </div>
                <div className="col-12">
                    <label className="col-form-label">What habit do you want to start?</label>
                    <input type="text" value={habitName} onChange={e => setHabitName(e.target.value)}/>
                </div>
                <div className="col-12">
                    <label className="col-form-label">How often?</label>
                    <input /> per <input/>
                </div>
            </div>
        </div>
    )
}