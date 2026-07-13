import { useEffect, useState } from 'react';
import '../styles/UserDashboard.css'
import QuizCard from './QuizCard.jsx'
import ResultList from './ResultList.jsx'
import { fetchRandomQuizzes, fetchHistory } from '../services/quizService.js';

function UserDashboard() {
    const [quizzes, setQuizzes] = useState([]);
    const [history, setHistory] =useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const loadQuizzes = await fetchRandomQuizzes(2);
                const loadHistory = await fetchHistory();
                setQuizzes(loadQuizzes);
                setHistory(loadHistory);
            } catch (err) {
                setError('Failed to load data');
                console.log(err)
            } finally {
                setLoading(false)
            }
        };
        loadData()
    }, [])

    const avrgRank = Math.floor(history.reduce((acc, item) => acc + item.rank, 0) / history.length)


    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error}</div>;

    return (
        <div className="user-dashboard">
            <div className="user-dashboard__hero">
                <div className="user-dashboard__hero-content">
                    <div className="user-dashboard__hero-title">
                        Ready to test your knowledge?
                    </div>
                    <div className="user-dashboard__hero-subtitle">
                        Enter the room code provided by your instructor to join a live quiz session.
                    </div>
                    <div className="user-dashboard__hero-input-container">
                        <svg className="user-dashboard__hero-input-icon" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8V0H8V8H0ZM2 6H6V2H2V6ZM0 18V10H8V18H0ZM2 16H6V12H2V16ZM10 8V0H18V8H10ZM12 6H16V2H12V6ZM16 18V16H18V18H16ZM10 12V10H12V12H10ZM12 14V12H14V14H12ZM10 16V14H12V16H10ZM12 18V16H14V18H12ZM14 16V14H16V16H14ZM14 12V10H16V12H14ZM16 14V12H18V14H16Z"/>
                        </svg>
                        <input type="text" className="user-dashboard__room-code" placeholder="Enter Room Code (e.g. 123 456)"/>
                        <button type="button" className="user-dashboard__join-button"> 
                            Join 
                            <svg className="user-dashboard__join-icon" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.6 7.99556L5.55 8.82056C5.78333 8.3539 6.025 7.9039 6.275 7.47056C6.525 7.03723 6.8 6.6039 7.1 6.17056L5.7 5.89556L3.6 7.99556ZM7.15 10.0706L10 12.8956C10.7 12.6289 11.45 12.2206 12.25 11.6706C13.05 11.1206 13.8 10.4956 14.5 9.79556C15.6667 8.6289 16.5792 7.33306 17.2375 5.90806C17.8958 4.48306 18.1833 3.17056 18.1 1.97056C16.9 1.88723 15.5833 2.17473 14.15 2.83306C12.7167 3.4914 11.4167 4.4039 10.25 5.57056C9.55 6.27056 8.925 7.02056 8.375 7.82056C7.825 8.62056 7.41667 9.37056 7.15 10.0706ZM11.6 8.44556C11.2167 8.06223 11.025 7.5914 11.025 7.03306C11.025 6.47473 11.2167 6.0039 11.6 5.62056C11.9833 5.23723 12.4583 5.04556 13.025 5.04556C13.5917 5.04556 14.0667 5.23723 14.45 5.62056C14.8333 6.0039 15.025 6.47473 15.025 7.03306C15.025 7.5914 14.8333 8.06223 14.45 8.44556C14.0667 8.8289 13.5917 9.02056 13.025 9.02056C12.4583 9.02056 11.9833 8.8289 11.6 8.44556ZM12.075 16.4706L14.175 14.3706L13.9 12.9706C13.4667 13.2706 13.0333 13.5414 12.6 13.7831C12.1667 14.0247 11.7167 14.2622 11.25 14.4956L12.075 16.4706ZM19.9 0.145565C20.2167 2.16223 20.0208 4.12473 19.3125 6.03306C18.6042 7.9414 17.3833 9.76223 15.65 11.4956L16.15 13.9706C16.2167 14.3039 16.2 14.6289 16.1 14.9456C16 15.2622 15.8333 15.5372 15.6 15.7706L11.4 19.9706L9.3 15.0456L5.025 10.7706L0.1 8.67056L4.275 4.47056C4.50833 4.23723 4.7875 4.07056 5.1125 3.97056C5.4375 3.87056 5.76667 3.8539 6.1 3.92056L8.575 4.42056C10.3083 2.68723 12.125 1.46223 14.025 0.745565C15.925 0.0288979 17.8833 -0.171102 19.9 0.145565ZM1.875 13.9456C2.45833 13.3622 3.17083 13.0664 4.0125 13.0581C4.85417 13.0497 5.56667 13.3372 6.15 13.9206C6.73333 14.5039 7.02083 15.2164 7.0125 16.0581C7.00417 16.8997 6.70833 17.6122 6.125 18.1956C5.70833 18.6122 5.0125 18.9706 4.0375 19.2706C3.0625 19.5706 1.71667 19.8372 0 20.0706C0.233333 18.3539 0.5 17.0081 0.8 16.0331C1.1 15.0581 1.45833 14.3622 1.875 13.9456ZM3.3 15.3456C3.13333 15.5122 2.96667 15.8164 2.8 16.2581C2.63333 16.6997 2.51667 17.1456 2.45 17.5956C2.9 17.5289 3.34583 17.4164 3.7875 17.2581C4.22917 17.0997 4.53333 16.9372 4.7 16.7706C4.9 16.5706 5.00833 16.3289 5.025 16.0456C5.04167 15.7622 4.95 15.5206 4.75 15.3206C4.55 15.1206 4.30833 15.0247 4.025 15.0331C3.74167 15.0414 3.5 15.1456 3.3 15.3456Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="user-dashboard__options">
                        <div className="user-dashboard__option">
                            <svg className="user-dashboard__option-icon" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.01667 8.51667L9.12917 4.40417L8.3125 3.5875L5.01667 6.88333L3.35417 5.22083L2.5375 6.0375L5.01667 8.51667ZM5.83333 11.6667C5.02639 11.6667 4.26806 11.5135 3.55833 11.2073C2.84861 10.901 2.23125 10.4854 1.70625 9.96042C1.18125 9.43542 0.765625 8.81806 0.459375 8.10833C0.153125 7.39861 0 6.64028 0 5.83333C0 5.02639 0.153125 4.26806 0.459375 3.55833C0.765625 2.84861 1.18125 2.23125 1.70625 1.70625C2.23125 1.18125 2.84861 0.765625 3.55833 0.459375C4.26806 0.153125 5.02639 0 5.83333 0C6.64028 0 7.39861 0.153125 8.10833 0.459375C8.81806 0.765625 9.43542 1.18125 9.96042 1.70625C10.4854 2.23125 10.901 2.84861 11.2073 3.55833C11.5135 4.26806 11.6667 5.02639 11.6667 5.83333C11.6667 6.64028 11.5135 7.39861 11.2073 8.10833C10.901 8.81806 10.4854 9.43542 9.96042 9.96042C9.43542 10.4854 8.81806 10.901 8.10833 11.2073C7.39861 11.5135 6.64028 11.6667 5.83333 11.6667ZM5.83333 10.5C7.13611 10.5 8.23958 10.0479 9.14375 9.14375C10.0479 8.23958 10.5 7.13611 10.5 5.83333C10.5 4.53056 10.0479 3.42708 9.14375 2.52292C8.23958 1.61875 7.13611 1.16667 5.83333 1.16667C4.53056 1.16667 3.42708 1.61875 2.52292 2.52292C1.61875 3.42708 1.16667 4.53056 1.16667 5.83333C1.16667 7.13611 1.61875 8.23958 2.52292 9.14375C3.42708 10.0479 4.53056 10.5 5.83333 10.5Z" />
                            </svg>
                            <p className="user-dashboard__description">No account needed to join</p>
                        </div>

                        <div className="user-dashboard__option">
                            <svg className="user-dashboard__option-icon" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.91667 7.93333L4.78333 5.25H3.12083L4.2875 1.16667H1.16667V5.83333H2.91667V7.93333ZM1.75 11.6667V7H0V0H5.83333L4.66667 4.08333H7L1.75 11.6667ZM2.91667 5.83333H1.16667H2.91667Z" />
                            </svg>

                            <p className="user-dashboard__description">Real-time results</p>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="user-dashboard__main">
                <div className="user-dashboard__main-left">
                    <div className="user-dashboard__main-left-info">
                        <div className="user-dashboard__main-left-title">
                            <svg className="user-dashboard__main-left-title-icon" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.55 16.2L11.725 10H7.725L8.45 4.325L3.825 11H7.3L6.55 16.2ZM4 20L5 13H0L9 0H11L10 8H16L6 20H4Z"/>
                            </svg>
                            <h1>Active Quizzes</h1>
                        </div>
                        <a href='' className="user-dashboard__main-left-view-all"> View All </a>
                    </div>

                    <div className="user-dashboard__main-left-content">
                        <div className="user-dashboard__main-left-cards">
                        {!loading && quizzes.map(quiz => <QuizCard key={quiz.id} quiz={quiz} />)}
                        </div>

                        <div className="user-dashboard__main-left-suggestion">
                            <svg className="user-dashboard__main-left-suggestion-logo" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.25 21.75L18.75 18.75L21.75 8.25L11.25 11.25L8.25 21.75ZM15 17.25C14.375 17.25 13.8438 17.0312 13.4062 16.5938C12.9688 16.1562 12.75 15.625 12.75 15C12.75 14.375 12.9688 13.8438 13.4062 13.4062C13.8438 12.9688 14.375 12.75 15 12.75C15.625 12.75 16.1562 12.9688 16.5938 13.4062C17.0312 13.8438 17.25 14.375 17.25 15C17.25 15.625 17.0312 16.1562 16.5938 16.5938C16.1562 17.0312 15.625 17.25 15 17.25ZM15 30C12.925 30 10.975 29.6063 9.15 28.8188C7.325 28.0312 5.7375 26.9625 4.3875 25.6125C3.0375 24.2625 1.96875 22.675 1.18125 20.85C0.39375 19.025 0 17.075 0 15C0 12.925 0.39375 10.975 1.18125 9.15C1.96875 7.325 3.0375 5.7375 4.3875 4.3875C5.7375 3.0375 7.325 1.96875 9.15 1.18125C10.975 0.39375 12.925 0 15 0C17.075 0 19.025 0.39375 20.85 1.18125C22.675 1.96875 24.2625 3.0375 25.6125 4.3875C26.9625 5.7375 28.0312 7.325 28.8188 9.15C29.6063 10.975 30 12.925 30 15C30 17.075 29.6063 19.025 28.8188 20.85C28.0312 22.675 26.9625 24.2625 25.6125 25.6125C24.2625 26.9625 22.675 28.0312 20.85 28.8188C19.025 29.6063 17.075 30 15 30ZM15 27C18.325 27 21.1562 25.8312 23.4937 23.4937C25.8312 21.1562 27 18.325 27 15C27 11.675 25.8312 8.84375 23.4937 6.50625C21.1562 4.16875 18.325 3 15 3C11.675 3 8.84375 4.16875 6.50625 6.50625C4.16875 8.84375 3 11.675 3 15C3 18.325 4.16875 21.1562 6.50625 23.4937C8.84375 25.8312 11.675 27 15 27Z"/>
                            </svg>
                            <p className="user-dashboard__main-left-suggestion-title">Don't see your class?</p>
                            <p className="user-dashboard__main-left-suggestion-subtitle">Check with your teacher for a direct link or code.</p>
                            <button type="button" className="user-dashboard__main-left-refresh">
                                Refresh List
                            </button>
                        </div>
                    </div>

                    
                </div>

                <div className="user-dashboard__main-right">
                    <div className="user-dashboard__main-right-info">
                        <div className="user-dashboard__main-right-title">
                            <svg className="user-dashboard__main-right-title-icon" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18C6.7 18 4.69583 17.2375 2.9875 15.7125C1.27917 14.1875 0.3 12.2833 0.05 10H2.1C2.33333 11.7333 3.10417 13.1667 4.4125 14.3C5.72083 15.4333 7.25 16 9 16C10.95 16 12.6042 15.3208 13.9625 13.9625C15.3208 12.6042 16 10.95 16 9C16 7.05 15.3208 5.39583 13.9625 4.0375C12.6042 2.67917 10.95 2 9 2C7.85 2 6.775 2.26667 5.775 2.8C4.775 3.33333 3.93333 4.06667 3.25 5H6V7H0V1H2V3.35C2.85 2.28333 3.8875 1.45833 5.1125 0.875C6.3375 0.291667 7.63333 0 9 0C10.25 0 11.4208 0.2375 12.5125 0.7125C13.6042 1.1875 14.5542 1.82917 15.3625 2.6375C16.1708 3.44583 16.8125 4.39583 17.2875 5.4875C17.7625 6.57917 18 7.75 18 9C18 10.25 17.7625 11.4208 17.2875 12.5125C16.8125 13.6042 16.1708 14.5542 15.3625 15.3625C14.5542 16.1708 13.6042 16.8125 12.5125 17.2875C11.4208 17.7625 10.25 18 9 18ZM11.8 13.2L8 9.4V4H10V8.6L13.2 11.8L11.8 13.2Z"/>
                            </svg>
                            <h1>History</h1>
                        </div>
                        <div className="user-dashboard__main-right-count">{avrgRank}</div>
                    </div>

                    <div className="user-dashboard__main-right-content">
                        <div className="result-list-container">
                            <ResultList history={history}/>
                            <div className="result-list__detailed">
                                View Detailed Performance
                                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.816667 7L0 6.18333L4.31667 1.8375L6.65 4.17083L9.68333 1.16667H8.16667V0H11.6667V3.5H10.5V1.98333L6.65 5.83333L4.31667 3.5L0.816667 7Z" fill="#3525CD"/>
                                </svg>


                            </div>
                        </div>


                        <div className="reward">
                            <svg xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 36V32H16V25.8C14.3667 25.4333 12.9083 24.7417 11.625 23.725C10.3417 22.7083 9.4 21.4333 8.8 19.9C6.3 19.6 4.20833 18.5083 2.525 16.625C0.841667 14.7417 0 12.5333 0 10V8C0 6.9 0.391667 5.95833 1.175 5.175C1.95833 4.39167 2.9 4 4 4H8V0H28V4H32C33.1 4 34.0417 4.39167 34.825 5.175C35.6083 5.95833 36 6.9 36 8V10C36 12.5333 35.1583 14.7417 33.475 16.625C31.7917 18.5083 29.7 19.6 27.2 19.9C26.6 21.4333 25.6583 22.7083 24.375 23.725C23.0917 24.7417 21.6333 25.4333 20 25.8V32H28V36H8ZM8 15.6V8H4V10C4 11.2667 4.36667 12.4083 5.1 13.425C5.83333 14.4417 6.8 15.1667 8 15.6ZM18 22C19.6667 22 21.0833 21.4167 22.25 20.25C23.4167 19.0833 24 17.6667 24 16V4H12V16C12 17.6667 12.5833 19.0833 13.75 20.25C14.9167 21.4167 16.3333 22 18 22ZM28 15.6C29.2 15.1667 30.1667 14.4417 30.9 13.425C31.6333 12.4083 32 11.2667 32 10V8H28V15.6Z" />
                            </svg>
                            <div className="reward-info">
                                <p className="reward-title">Scholar Path</p>
                                <p className="reward-subtitle">3 more top-5 finishes to reach Silver Tier!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard