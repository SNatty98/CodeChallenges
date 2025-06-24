import "react"
import {useState} from "react";

export function MCQChallenge({challenge, showInfo = false}) {

    const [selectedOption, setSelectedOption] = useState(null)
    const [shouldShowInfo, setShouldShowInfo] = useState (showInfo)

    const options = typeof challenge.options === "string"
        ? JSON.parse(challenge.options)
        : challenge.options

    const handleOptionSelect = (index) => {
        if(selectedOption !== null) return;
        setSelectedOption(index)
        setShouldShowInfo(true)
    }

    const getOptionClass = (index) => {
        if (selectedOption === null) return "option"

        if (index === challenge.correct_answer_id){
            return "option correct"
        }

        if (selectedOption === index && index !== challenge.correct_answer_id) {
            return "option incorrect"
        }

        return "option"
    }

    return <div className="challenge-display">
        <p><strong>Difficulty</strong>: {challenge.difficulty}</p>
        <p className="challenge-title">{challenge.title}</p>
        <div className="options">
            {options.map((option, index) =>(
                <div
                    className={getOptionClass((index))}
                    key={index}
                    onClick={() => handleOptionSelect(index)}>
                    {option}
                </div>
            ))}
        </div>
        {shouldShowInfo && selectedOption !== null && (
            <div className="explanation">
                <h4>Challenge Explanation</h4>
                <p>{challenge.explanation}</p>
            </div>
        )}
    </div>
}