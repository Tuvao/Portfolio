import React from 'react';

export const MoodList = ({ show, list, toggleList }) => {
    return (
        <div className="row">
            <div className="col-12">
                <strong>All done?</strong>
            </div>
            <div className="col-12">
                <button type="button" className="btn btn-secondary" onClick={() => toggleList(!show)}>
                    {show ? "Hide moods" : "Show moods"}
                </button>
            </div>
            <div className={`col-12 mt-4 ${show ? "d-block" : "d-none"}`}>
                {list.map((item, i) => {
                    return (<p key={i}>{item.mood}
                        {item.count > 1 ? <span className="ml-1 badge badge-primary">{item.count}</span> : ""}
                    </p>)
                })}
            </div>
        </div>
    )
}