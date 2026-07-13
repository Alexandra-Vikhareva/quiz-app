import ResultItem from "./ResultItem"

function ResultList({ history }) {
    return(
        <ul className="result-list">
            {history.map(item => (
                <ResultItem key={item.id} item={item}/>
            ))}
        </ul>
    )
}

export default ResultList