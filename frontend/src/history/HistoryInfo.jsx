import "react"
import {useState, useEffect} from "react";
import {MCQChallenge} from "../challenge/MCQChallenge.jsx";

export function HistoryInfo() {
    const [history, setHistory] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchHistory()
    }, []);

    const fetchHistory = async () => {
        setLoading(false);
    }

    if (loading) {
       return <div className="loading"> Loading history</div>
    }

    if (error) {
        return <div className="error">
            <p>{error}</p>
            <button onClick={fetchHistory}>Retry</button>
        </div>
    }

    return <div className="history-panel">
        <h2>History</h2>
        {history.length === 0 ? <p>No Challenge History</p> :
            <div className="history-list">
                {history.map((challenge) => {
                    return <MCQChallenge
                                challenge={challenge}
                                key={challenge.id}
                                showInfo
                            />
            })}
            </div>
        }
    </div>
}