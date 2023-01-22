import './loginPage.css'
import  axios from 'axios'
import {FaEyeSlash, FaEye} from 'react-icons/fa'
import { useState } from 'react';
import illustration from '../illustrations/login-illustrate.svg'

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

function LoginPage() {

    // ----------------  STATES ------------------
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })

    // const [token, setToken] = useState('')
    const [eyesOpen, setEyesOpen] = useState(false)

    // --------------- FUNCTIONS -----------------

    // --- The Login function ---
    const Login = async () => {
        try {
            const response = await axios.post('https://loop-social-server-side.vercel.app/api/auth/login', { userInfo})
            console.log(response.data)

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

//   useEffect(() => {
    
//     .then((response) => {
//       console.log(response.data);
//       // setToken(response.user.token)
//       // console.log(token)
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   }, [ userInfo ])

  return (
    <div className="login-page">
      <form className='login-form' onSubmit={(e) => e.preventDefault}>
        <ul className='login-ul'>
            <li>
                <label className='label' htmlFor="email">EMAIL</label>
                <input 
                    name='email' 
                    className='input' 
                    type="email" 
                    id='email' 
                    value={userInfo.email} 
                    onChange={(e) => fillingData(e)}
                    placeholder='example@gmail.com'
                />
            </li>

            <li>
                <label className='label' htmlFor="password">PASSWORD</label>

                { eyesOpen ? 
                    <input 
                        name='password' 
                        className='input eyes' 
                        type="text" 
                        id='password' 
                        value= {userInfo.password} 
                        onChange={(e) => fillingData(e)} 
                        placeholder='your password'
                    /> : 
                    <input 
                        name='password' 
                        className='input eyes' 
                        type="password" 
                        id='password' 
                        value= {userInfo.password} 
                        onChange={(e) => fillingData(e)} 
                        placeholder='your password'
                    /> 
                }
            </li>
        </ul>

        <div className="btn">
            <button> Login </button>
        </div>
      </form>

      <div className="illustration">
        <img src={illustration} alt="illustration" />
      </div>
    </div>
  );
}

export default LoginPage;
// 