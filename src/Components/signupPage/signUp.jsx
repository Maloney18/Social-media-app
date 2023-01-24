import './signUp.css'
import  axios from 'axios'
import {FaEyeSlash, FaEye, FaArrowRight} from 'react-icons/fa'
import { BiInfoCircle } from 'react-icons/bi'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate()

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
        console.log('started submitting')
        try {
            const response = await axios.post('https://loop-social-server-side.vercel.app/api/auth/register', newUser)
            console.log(response.data)
            localStorage.setItem('token', JSON.stringify(response.data.token))

        } catch (error) {
            console.log(error)
        }
    }

    // --- onchange function for filling the user info ---
    const fillingData = (e) => {
        const {name, value} = e.target
        setNewUser(prevState => ({...prevState, [name]: value}))
    }

    // --- function for toggling password visibility ---
    const toggleEye = () => {
        setEyesOpen(!eyesOpen)
    }

    // ----- condition for enabling sign-up button ------
    const condition = () => {

        if (newUser.email.length === 0 || newUser.password.length < 6 || newUser.username.length < 4 ) return true

        return false
    }

    useEffect( () => {
        condition()
    }, [newUser?.email, newUser?.password, newUser?.username])

    return (
        <div className="signup-page">
        <form className='signup-form' onSubmit={(e) => e.preventDefault()}>
            <h2>Sign Up</h2>
            <ul className='signup-ul'>
                <li>
                    <label className='label' htmlFor="username">Username</label>
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

                    <div className='signup-input-cont'>
                        { eyesOpen ? 
                            <input 
                                name='password' 
                                className='input' 
                                type="text" 
                                id='password' 
                                value= {newUser.password} 
                                onChange={(e) => fillingData(e)}
                                maxLength={22}
                            /> : 
                            <input 
                                name='password' 
                                className='input' 
                                type="password" 
                                id='password' 
                                value= {newUser.password} 
                                onChange={(e) => fillingData(e)} 
                                maxLength={22}
                                placeholder='a strong password'
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

                        <span className='pass-info'> <BiInfoCircle /> password must be 6 or more characters</span>
                    </div>

                </li>
            </ul>

            <div className="btn">
                <button 
                    className='signup-btn'
                    onClick={() => signUp()}
                    disabled = {condition()}
                > 
                    Sign up 
                </button>
            </div>

            <p>Already have an account ? <span onClick={() => navigate('/login')} className='log-word'>Login <FaArrowRight /></span></p>
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