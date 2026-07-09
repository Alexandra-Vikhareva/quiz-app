import './App.css'

function App() {

  return (
    <>
    <div className="login-container">
      <div className="header">
        <div className="logo-container">
          <svg className="logo" width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 21V10.65L16.5 18L0 9L16.5 0L33 9V21H30ZM16.5 27L6 21.3V13.8L16.5 19.5L27 13.8V21.3L16.5 27Z" fill="white"/>
          </svg>
        </div>
        
        <h1 className="title">EduQuiz</h1>
        <p className="catch-phrase">Empower your learning jorney</p>
      </div>

      <div className="login-form">
        <form action="" method="get" className='form'>
          <div className='container'>
            <label htmlFor="email">Email Address</label>
            <div className='input-container'>
              <svg className="icon" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM10 9L2 4V14H18V4L10 9ZM10 7L18 2H2L10 7ZM2 4V2V4V14V4Z" fill="#777587"/>
              </svg>
              <input type="email" name="email" id="email" required placeholder='name@company.com' autocomplete/>
            </div>
          </div>

          <div className="container">
            <label htmlFor="password">Password</label>
            <a href="" class="forgot-password-link">Forgot password?</a>
            <div className='input-container'>
              <svg className="icon" width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 21C1.45 21 0.979167 20.8042 0.5875 20.4125C0.195833 20.0208 0 19.55 0 19V9C0 8.45 0.195833 7.97917 0.5875 7.5875C0.979167 7.19583 1.45 7 2 7H3V5C3 3.61667 3.4875 2.4375 4.4625 1.4625C5.4375 0.4875 6.61667 0 8 0C9.38333 0 10.5625 0.4875 11.5375 1.4625C12.5125 2.4375 13 3.61667 13 5V7H14C14.55 7 15.0208 7.19583 15.4125 7.5875C15.8042 7.97917 16 8.45 16 9V19C16 19.55 15.8042 20.0208 15.4125 20.4125C15.0208 20.8042 14.55 21 14 21H2ZM2 19H14V9H2V19ZM8 16C8.55 16 9.02083 15.8042 9.4125 15.4125C9.80417 15.0208 10 14.55 10 14C10 13.45 9.80417 12.9792 9.4125 12.5875C9.02083 12.1958 8.55 12 8 12C7.45 12 6.97917 12.1958 6.5875 12.5875C6.19583 12.9792 6 13.45 6 14C6 14.55 6.19583 15.0208 6.5875 15.4125C6.97917 15.8042 7.45 16 8 16ZM5 7H11V5C11 4.16667 10.7083 3.45833 10.125 2.875C9.54167 2.29167 8.83333 2 8 2C7.16667 2 6.45833 2.29167 5.875 2.875C5.29167 3.45833 5 4.16667 5 5V7ZM2 19V9V19Z" fill="#777587"/>
              </svg>
              <input  type="password" name="password" id="password" required placeholder='••••••••'/>
              <svg className='eye-icon' width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 12C12.25 12 13.3125 11.5625 14.1875 10.6875C15.0625 9.8125 15.5 8.75 15.5 7.5C15.5 6.25 15.0625 5.1875 14.1875 4.3125C13.3125 3.4375 12.25 3 11 3C9.75 3 8.6875 3.4375 7.8125 4.3125C6.9375 5.1875 6.5 6.25 6.5 7.5C6.5 8.75 6.9375 9.8125 7.8125 10.6875C8.6875 11.5625 9.75 12 11 12ZM11 10.2C10.25 10.2 9.6125 9.9375 9.0875 9.4125C8.5625 8.8875 8.3 8.25 8.3 7.5C8.3 6.75 8.5625 6.1125 9.0875 5.5875C9.6125 5.0625 10.25 4.8 11 4.8C11.75 4.8 12.3875 5.0625 12.9125 5.5875C13.4375 6.1125 13.7 6.75 13.7 7.5C13.7 8.25 13.4375 8.8875 12.9125 9.4125C12.3875 9.9375 11.75 10.2 11 10.2ZM11 15C8.56667 15 6.35 14.3208 4.35 12.9625C2.35 11.6042 0.9 9.78333 0 7.5C0.9 5.21667 2.35 3.39583 4.35 2.0375C6.35 0.679167 8.56667 0 11 0C13.4333 0 15.65 0.679167 17.65 2.0375C19.65 3.39583 21.1 5.21667 22 7.5C21.1 9.78333 19.65 11.6042 17.65 12.9625C15.65 14.3208 13.4333 15 11 15ZM11 13C12.8833 13 14.6125 12.5042 16.1875 11.5125C17.7625 10.5208 18.9667 9.18333 19.8 7.5C18.9667 5.81667 17.7625 4.47917 16.1875 3.4875C14.6125 2.49583 12.8833 2 11 2C9.11667 2 7.3875 2.49583 5.8125 3.4875C4.2375 4.47917 3.03333 5.81667 2.2 7.5C3.03333 9.18333 4.2375 10.5208 5.8125 11.5125C7.3875 12.5042 9.11667 13 11 13Z" fill="#777587"/>
              </svg>


            </div>
          </div>

          <button type="submit" className='login-btn'>Log In</button>

          <div className='checkbox-container'>
            <div className="checkbox"></div>
            Remember me
          </div>
          <div class="divider-with-text">
            <span class="divider-line"></span>
            <span class="divider-text">OR CONTINUE WITH</span>
            <span class="divider-line"></span>
          </div>
          <div className="social-media">
            <div className='btn'>
              <img className="social-media-icon" src="/src/assets/google-icon.svg" alt="google icon" />
              Google
            </div>

            <div className='btn'>
              <img className="social-media-icon" src="/src/assets/apple-icon.svg" alt="apple icon" />
              Apple
            </div>
          </div>
        </form>
      </div>
      

      <div className="signup">Don't have an account? <a className="signup-link" href="">Sign Up</a></div>
    </div>
    </>
  )
}

export default App
