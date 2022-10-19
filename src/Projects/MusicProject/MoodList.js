import React from 'react';

export const MoodList = ({ show, list, toggleList }) => {
    return (
        <div className="row">
            {/* <div className="col-12">
                <strong>All done?</strong>
            </div> */}
            {/* <div className="col-12">
                <button type="button" className="btn btn-secondary" onClick={() => toggleList(!show)}>
                    {show ? "Hide moods" : "Show moods"}
                </button>
            </div> */}
            <div className={`col-12 mt-4`}>
                {list.map((item, i) => {
                    // return (<p key={i}>{item.mood}
                    //     {item.count > 1 ? <span className="ml-1 badge badge-primary">{item.count}</span> : ""}
                    // </p>)
                    return (
                        <span className="badge badge-primary mr-2 mb-2" key={i} style={{ fontSize: '1.' + item.count + 'rem' }}>
                            {item.mood}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}