import '../styles/ResultItem.css'
import { formatDistanceToNow} from 'date-fns';

function ResultItem({ item }) {
    const date = new Date(item.date);
    const relativeTime = formatDistanceToNow(date, { addSuffix: true });

    function getOrdinal(n) {
        const s = ['th','st','nd','rd'];
        const v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    }

    return(
        <li className="result-item">
            <div className="result-rank">
                { item.rank }
            </div>
            <div className="result-info">
                <h1 className="result-info__title">
                    { item.quizTitle }
                </h1>
                <p className="result-info__date">
                    {relativeTime}
                </p>
            </div>
            <div className="result-stats">
                <div className="result-stats__prop-correct">
                    {item.percentage}%
                </div>
                <div className="result-stats__rank">
                    Rank: {getOrdinal(item.rank)}
                </div>
            </div>
        </li>
    )
}

export default ResultItem