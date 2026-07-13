import '../styles/ResultItem.css'

function ResultItem() {
    return(
        <li className="result-item">
            <div className="result-rank">
                1
            </div>
            <div className="result-info">
                <h1 className="result-info__title">
                    Intro to Macroeconomics
                </h1>
                <p className="result-info__date">
                    2 days ago
                </p>
            </div>
            <div className="result-stats">
                <div className="result-stats__prop-correct">
                    98%
                </div>
                <div className="result-stats__rank">
                    Rank: 1st
                </div>
            </div>
        </li>
    )
}

export default ResultItem