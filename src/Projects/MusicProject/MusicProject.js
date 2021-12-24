import React, { useState } from 'react';
import { MoodList } from './MoodList';
import { MoodInput } from './MoodInput';
import { Header } from './Header';

export const MusicProject = () => {
    const [moodList, setMoodList] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [showList, setShowList] = useState(false);

    const addMood = (userInput) => {
        let copy = [...moodList];
        if (copy.find((item) => item.mood.toLowerCase() === userInput.toLowerCase())) {
            copy = copy.map((item) => {
                if (item.mood.toLowerCase() === userInput.toLowerCase()) {
                    return { id: item.id, mood: item.mood, count: item.count + 1 }
                }
                return item;
            })
        }
        else{
            copy = [...copy, { id: moodList.length + 1, mood: userInput, count: 1 }];
        }
        setMoodList(copy);
    }

    return (
        <div className="container">
            <div className="row mx-auto">
                <Header />
                <div className="col-12">
                    <MoodInput addMood={addMood} userInput={userInput} setUserInput={setUserInput} />
                    <hr />
                </div>
                <div className="col-12 mt-4">
                    <MoodList show={showList} list={moodList} toggleList={setShowList} />
                </div>
            </div>
        </div>
    )
}


/* Next time: Add "Remember till next time checkbox
Add Colours
Add a delete button for each item */