import { useState } from 'react';
import '../styles/Signup.css';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
    const role = "participant";

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            if (password === confirm) {
                const { data } = await api.post('/auth/register', { name, email, password, role});
                login(data.token, data.user);
                navigate('/dashboard');
            } else {
                setError('Password and confirmation do not match')
            }
            
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    }

  return (

    <>
        {error && (
            <div className="error">
            <span className="error__text">{error}</span>
            <button
                type="button"
                className="error__close"
                onClick={() => setError('')}
            >
                ×
            </button>
            </div>
        )}

        <div className="signup">
        <section className="signup__hero">
            <h1 className="signup__hero-title">
            Ignite Your <span className="signup__hero-accent">Learning</span> Journey.
            </h1>
            <p className="signup__hero-subtitle">
            Join thousands of students and organizers worldwide in the most engaging gamified educational platform.
            </p>

            <div className="signup__cards">
            <div className="signup__card">
                <svg className="signup__card-icon" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M18 8L16.75 5.25L14 4L16.75 2.75L18 0L19.25 2.75L22 4L19.25 5.25L18 8ZM18 22L16.75 19.25L14 18L16.75 16.75L18 14L19.25 16.75L22 18L19.25 19.25L18 22ZM8 19L5.5 13.5L0 11L5.5 8.5L8 3L10.5 8.5L16 11L10.5 13.5L8 19ZM8 14.15L9 12L11.15 11L9 10L8 7.85L7 10L4.85 11L7 12L8 14.15Z" fill="#3525CD"/>
                </svg>
                <h2 className="signup__card-title">Gamified Tasks</h2>
                <p className="signup__card-text">Earn XP and badges as you master new skills.</p>
            </div>

            <div className="signup__card">
                <svg className="signup__card-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4 14H6V9H4V14ZM12 14H14V4H12V14ZM8 14H10V11H8V14ZM8 9H10V7H8V9ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM2 16H16V2H2V16ZM2 2V16V2Z" fill="#712AE2"/>
                </svg>
                <h2 className="signup__card-title">Deep Insights</h2>
                <p className="signup__card-text">Real-time reports for both mentors and learners.</p>
            </div>
            </div>
        </section>

        <section className="signup__panel">
            <div className="signup__form-wrapper">
            <form className="signup__form" onSubmit={handleSubmit}>
                <div className="signup__form-header">
                <h2 className="signup__form-title">Create Account</h2>
                <p className="signup__form-subtitle">Join the community today.</p>
                </div>

                <div className="signup__field">
                <label className="signup__label" htmlFor="name">Name</label>
                <div className="signup__input-wrapper">
                    <input
                    className="signup__input"
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                </div>

                <div className="signup__field">
                <label className="signup__label" htmlFor="email">Email Address</label>
                <div className="signup__input-wrapper">
                    <input
                    className="signup__input"
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                </div>

                <div className="signup__row">
                <div className="signup__field signup__field--half">
                    <label className="signup__label" htmlFor="password">Password</label>
                    <div className="signup__input-wrapper">
                    <input
                        className="signup__input"
                        type="password"
                        id="password"
                        name="password"
                        required
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <svg className="signup__input-eye" width="22" height="15" viewBox="0 0 22 15" fill="none">
                        <path d="M11 12C12.25 12 13.3125 11.5625 14.1875 10.6875C15.0625 9.8125 15.5 8.75 15.5 7.5C15.5 6.25 15.0625 5.1875 14.1875 4.3125C13.3125 3.4375 12.25 3 11 3C9.75 3 8.6875 3.4375 7.8125 4.3125C6.9375 5.1875 6.5 6.25 6.5 7.5C6.5 8.75 6.9375 9.8125 7.8125 10.6875C8.6875 11.5625 9.75 12 11 12ZM11 10.2C10.25 10.2 9.6125 9.9375 9.0875 9.4125C8.5625 8.8875 8.3 8.25 8.3 7.5C8.3 6.75 8.5625 6.1125 9.0875 5.5875C9.6125 5.0625 10.25 4.8 11 4.8C11.75 4.8 12.3875 5.0625 12.9125 5.5875C13.4375 6.1125 13.7 6.75 13.7 7.5C13.7 8.25 13.4375 8.8875 12.9125 9.4125C12.3875 9.9375 11.75 10.2 11 10.2ZM11 15C8.56667 15 6.35 14.3208 4.35 12.9625C2.35 11.6042 0.9 9.78333 0 7.5C0.9 5.21667 2.35 3.39583 4.35 2.0375C6.35 0.679167 8.56667 0 11 0C13.4333 0 15.65 0.679167 17.65 2.0375C19.65 3.39583 21.1 5.21667 22 7.5C21.1 9.78333 19.65 11.6042 17.65 12.9625C15.65 14.3208 13.4333 15 11 15ZM11 13C12.8833 13 14.6125 12.5042 16.1875 11.5125C17.7625 10.5208 18.9667 9.18333 19.8 7.5C18.9667 5.81667 17.7625 4.47917 16.1875 3.4875C14.6125 2.49583 12.8833 2 11 2C9.11667 2 7.3875 2.49583 5.8125 3.4875C4.2375 4.47917 3.03333 5.81667 2.2 7.5C3.03333 9.18333 4.2375 10.5208 5.8125 11.5125C7.3875 12.5042 9.11667 13 11 13Z" fill="#777587"/>
                    </svg>
                    </div>
                </div>

                <div className="signup__field signup__field--half">
                    <label className="signup__label" htmlFor="confirm">Confirm</label>
                    <div className="signup__input-wrapper">
                    <input
                        className="signup__input"
                        type="password"
                        id="confirm"
                        name="confirm"
                        required
                        placeholder="••••••••"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                    />
                    <svg className="signup__input-eye" width="22" height="15" viewBox="0 0 22 15" fill="none">
                        <path d="M11 12C12.25 12 13.3125 11.5625 14.1875 10.6875C15.0625 9.8125 15.5 8.75 15.5 7.5C15.5 6.25 15.0625 5.1875 14.1875 4.3125C13.3125 3.4375 12.25 3 11 3C9.75 3 8.6875 3.4375 7.8125 4.3125C6.9375 5.1875 6.5 6.25 6.5 7.5C6.5 8.75 6.9375 9.8125 7.8125 10.6875C8.6875 11.5625 9.75 12 11 12ZM11 10.2C10.25 10.2 9.6125 9.9375 9.0875 9.4125C8.5625 8.8875 8.3 8.25 8.3 7.5C8.3 6.75 8.5625 6.1125 9.0875 5.5875C9.6125 5.0625 10.25 4.8 11 4.8C11.75 4.8 12.3875 5.0625 12.9125 5.5875C13.4375 6.1125 13.7 6.75 13.7 7.5C13.7 8.25 13.4375 8.8875 12.9125 9.4125C12.3875 9.9375 11.75 10.2 11 10.2ZM11 15C8.56667 15 6.35 14.3208 4.35 12.9625C2.35 11.6042 0.9 9.78333 0 7.5C0.9 5.21667 2.35 3.39583 4.35 2.0375C6.35 0.679167 8.56667 0 11 0C13.4333 0 15.65 0.679167 17.65 2.0375C19.65 3.39583 21.1 5.21667 22 7.5C21.1 9.78333 19.65 11.6042 17.65 12.9625C15.65 14.3208 13.4333 15 11 15ZM11 13C12.8833 13 14.6125 12.5042 16.1875 11.5125C17.7625 10.5208 18.9667 9.18333 19.8 7.5C18.9667 5.81667 17.7625 4.47917 16.1875 3.4875C14.6125 2.49583 12.8833 2 11 2C9.11667 2 7.3875 2.49583 5.8125 3.4875C4.2375 4.47917 3.03333 5.81667 2.2 7.5C3.03333 9.18333 4.2375 10.5208 5.8125 11.5125C7.3875 12.5042 9.11667 13 11 13Z" fill="#777587"/>
                    </svg>
                    </div>
                </div>
                </div>

                <button type="submit" className="signup__submit" disabled={loading}>
                Create Account →
                </button>

                <div className="signup__checkbox-group">
                <div id="terms" className="signup__checkbox" />
                <label htmlFor="terms" className="signup__checkbox-label">
                    I agree to the <span className="signup__accent">Terms of Service</span> and <span className="signup__accent">Privacy Policy</span>.
                </label>
                </div>

                <div className="signup__divider">
                <span className="signup__divider-line"></span>
                <span className="signup__divider-text">OR SIGN UP WITH</span>
                <span className="signup__divider-line"></span>
                </div>

                <div className="signup__social">
                <button type="button" className="signup__social-btn signup__social-btn--google">
                    <img className="signup__social-icon" src="/src/assets/google-icon.svg" alt="Google" />
                    Google
                </button>
                <button type="button" className="signup__social-btn signup__social-btn--apple">
                    <img className="signup__social-icon" src="/src/assets/apple-icon.svg" alt="Apple" />
                    Apple
                </button>
                </div>
            </form>
            </div>
        </section>
        </div>
  </>
  );
}

export default Signup;