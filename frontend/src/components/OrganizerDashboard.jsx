import '../styles/OrganizerDashboard.css'
import { useEffect, useState } from 'react'
import { fetchOrganizerQuizzes } from '../services/quizService';
import QuizCardOrganizer from './QuizCardOrganizer';

function OrganizerDashboard () {
    const [quizzes, setQuizzes] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const loadQuizzes = await fetchOrganizerQuizzes();
                setQuizzes(loadQuizzes);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false)
            }
        };
        loadData();
    }, [])

    if (loading) return <div>Loading</div>
    if (error) return <div>Error: {error}</div>

    return(
        <div className="organizer-dashboard">
            <div className="organizer-dashboard__search">
                <svg className="organizer-dashboard__search-icon" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z"/>
                </svg>
                <input type="text" className="organizer-dashboard__search-input" placeholder="Search your quizzes..."/>
            </div>

            <div className="organizer-dashboard__content">
                <div className="organizer-dashboard__header">
                    <div className="organizer-dashboard__header-left">
                        <p className="organizer-dashboard__header-title">My Quizzes</p>
                        <p className="organizer-dashboard__header-subtitle">Manage and monitor your ongoing educational assessments.</p>
                    </div>
                    <div className="organizer-dashboard__header-right">
                        <div className="organizer-dashboard__header-btn">
                            <svg width="18" height="12" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 12V10H11V12H7ZM3 7V5H15V7H3ZM0 2V0H18V2H0Z"/>
                            </svg>
                            Filter
                        </div>
                        <div className="organizer-dashboard__header-btn">
                            <svg width="18" height="12" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 12V10H6V12H0ZM0 7V5H12V7H0ZM0 2V0H18V2H0Z" />
                            </svg>
                            Sort
                        </div>
                    </div>
                </div>

                <div className="organizer-dashboard__body">
                    <div className="quiz-new-template">
                        <div className="quiz-new-template-icon">
                            <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.25 18.75H13.75V13.75H18.75V11.25H13.75V6.25H11.25V11.25H6.25V13.75H11.25V18.75ZM12.5 25C10.7708 25 9.14583 24.6719 7.625 24.0156C6.10417 23.3594 4.78125 22.4688 3.65625 21.3438C2.53125 20.2188 1.64062 18.8958 0.984375 17.375C0.328125 15.8542 0 14.2292 0 12.5C0 10.7708 0.328125 9.14583 0.984375 7.625C1.64062 6.10417 2.53125 4.78125 3.65625 3.65625C4.78125 2.53125 6.10417 1.64062 7.625 0.984375C9.14583 0.328125 10.7708 0 12.5 0C14.2292 0 15.8542 0.328125 17.375 0.984375C18.8958 1.64062 20.2188 2.53125 21.3438 3.65625C22.4688 4.78125 23.3594 6.10417 24.0156 7.625C24.6719 9.14583 25 10.7708 25 12.5C25 14.2292 24.6719 15.8542 24.0156 17.375C23.3594 18.8958 22.4688 20.2188 21.3438 21.3438C20.2188 22.4688 18.8958 23.3594 17.375 24.0156C15.8542 24.6719 14.2292 25 12.5 25ZM12.5 22.5C15.2917 22.5 17.6562 21.5312 19.5938 19.5938C21.5312 17.6562 22.5 15.2917 22.5 12.5C22.5 9.70833 21.5312 7.34375 19.5938 5.40625C17.6562 3.46875 15.2917 2.5 12.5 2.5C9.70833 2.5 7.34375 3.46875 5.40625 5.40625C3.46875 7.34375 2.5 9.70833 2.5 12.5C2.5 15.2917 3.46875 17.6562 5.40625 19.5938C7.34375 21.5312 9.70833 22.5 12.5 22.5Z"/>
                            </svg>
                        </div>
                        <div className="quiz-new-template-title">New Template</div>
                        <div className="quiz-new-template-subtitle">Start from a blank canvas</div>
                    </div>

                    {quizzes.map((quiz) => <QuizCardOrganizer quiz={quiz} />)}
                </div>
            </div>
        </div>
    )
}

export default OrganizerDashboard