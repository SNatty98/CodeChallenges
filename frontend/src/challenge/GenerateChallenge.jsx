import "react"
import {useState, useEffect} from "react";
import {MCQChallenge} from "./MCQChallenge.jsx";

export function GenerateChallenge() {

    const [difficulty, setDifficulty] = useState(null)
    const [challenge, setChallenge] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [quota, setQuota] = useState(null)

     // const fetchQuota = async = () => {
     //
     // }
     //
     // const generateChallenge = async = () => {
     //
     // }
     //
     // const getNextResetTime = () => {
     //
     // }

    return <div>
        <h2>Coding Challenge Generator</h2>
        {/*<div className="quota-display">*/}
        {/*    <p>Challenges remaining today: {quota?.quota.remaining || 0}</p>*/}
        {/*    {quota?.quota.remaining === 0 && (*/}
        {/*        <p>Next reset: {0}</p>*/}
        {/*    )}*/}
        {/*</div>*/}
        <div className="difficulty-selector">
             <label htmlFor="difficulty">Select Difficulty</label>
            <main>
                <select
                    id="difficulty"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    disabled={isLoading}
                >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </main>
        </div>

        <button
         //   onClick={generateChallenge}
         //   disabled={isLoading || quota?.quota_remaining === 0}
            className="generate-button"
        >
            {isLoading ? "Generating challenge..." : "Generate Challenge "}
        </button>

        {error && <div className="error-message">
            <p>{error}</p>
        </div>}

        {challenge && <MCQChallenge challenge={challenge}/>}
    </div>
}