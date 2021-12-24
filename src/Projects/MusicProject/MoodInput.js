import React from 'react';

export const MoodInput = ({ addMood, userInput, setUserInput }) => {
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addMood(userInput);
        setUserInput("");
    }
    return (
        <form className="row">
            <div className="col-12">
                <div className="form-group">
                    <label>What mood are you in tonight?</label>
                    <input value={userInput} type="text" className="form-control"
                         onChange={handleChange} placeholder="Enter mood..."/>
                </div>
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
                    Add
                </button>
            </div>
        </form>
    )
}