import './signUp.css'
import  axios from 'axios'
import {FaEyeSlash, FaEye} from 'react-icons/fa'
import { useState } from 'react';
// import illustration from '../illustrations/login-illustrate.svg'

// const request = {
//   method: 'POST',
//   url: 'https://loop-social-server-side.vercel.app/auth/login',
//   body: ''
// }


// --------------- PROJECT ENDPOINTS ------------------
// API URL -- https://loop-social-server-side.vercel.app/
// REGISTER endpoint -- /api/auth/register
// REGISTER DATA -- username, email, password
// LOGIN endpoint -- /api/auth/login
// LOGIN DATA -- email & password

function SignUpPage() {

    // ----------------  STATES ------------------
    const [newUser, setNewUser] = useState({
        username: '',
        email: '',
        password: ''
    })

    // const [token, setToken] = useState('')
    const [eyesOpen, setEyesOpen] = useState(false)

    // --------------- FUNCTIONS -----------------

    // --- The Login function ---
    const signUp = async () => {
        try {
            const response = await axios.post('https://loop-social-server-side.vercel.app/api/auth/register', { newUser})
            console.log(response.data)
            localStorage.setItem('token', JSON.stringify(response.data.token))

        } catch (error) {
            console.log(error)
        }
    }

    // --- onchange function for filling the user info ---
    const fillingData = (e) => {
        const {name, value} = e.target
        setUserInfo(prevState => ({...prevState, [name]: value}))
    }

    // --- function for toggling password visibility ---
    const toggleEye = () => {
        setEyesOpen(!eyesOpen)
    }

    // ----- condition for enabling sign-up button ------
    const condition = () => {
        if (newUser.email.length === 0 || newUser.password.length < 8 || newUser.username.length < 4 ) return true

        return false
    }

    return (
        <div className="signUp-page">
        <form className='signUp-form' onSubmit={(e) => e.preventDefault()}>
            <h2>Login</h2>
            <ul className='signUp-ul'>
                <li>
                    <label className='label' htmlFor="username">Email</label>
                    <input 
                        name='username' 
                        className='input' 
                        type="text" 
                        id='username' 
                        value={newUser.username} 
                        onChange={(e) => fillingData(e)}
                        placeholder='at least 4 or more characters'
                        maxLength={25}
                    />
                </li>

                <li>
                    <label className='label' htmlFor="email">Email</label>
                    <input 
                        name='email' 
                        className='input' 
                        type="email" 
                        id='email' 
                        value={newUser.email} 
                        onChange={(e) => fillingData(e)}
                        placeholder='example@gmail.com'
                    />
                </li>

                <li>
                    <label className='label' htmlFor="password">Password</label>

                    <div className='input-cont'>
                        { eyesOpen ? 
                            <input 
                                name='password' 
                                className='input eyes' 
                                type="text" 
                                id='password' 
                                value= {newUser.password} 
                                onChange={(e) => fillingData(e)}
                                maxLength={22}
                            /> : 
                            <input 
                                name='password' 
                                className='input eyes' 
                                type="password" 
                                id='password' 
                                value= {newUser.password} 
                                onChange={(e) => fillingData(e)} 
                                placeholder='password must be greater than 6 characters'
                                maxLength={22}
                            /> 
                        }

                        {   newUser.password.length !== 0 &&
                            <span 
                                className='switchEye'
                                onClick={toggleEye}
                            >
                                { eyesOpen ? <FaEyeSlash /> : <FaEye /> }
                            </span>
                        }
                    </div>

                </li>
            </ul>

            <div className="btn">
                <button 
                    className='signUp-btn'
                    onClick={signUp}
                    disabled = {condition}
                > 
                    Login 
                </button>
            </div>

            <p className="nav-to-login">Already have an account ? <span className='log-word'>Login</span></p>
        </form>

        <div className="signup-illustration">
            <h1>Join Us!</h1>
            <img src='illustrations/sign-up.png' alt="illustration" />
        </div>
        </div>
    );
}

export default SignUpPage;
// 