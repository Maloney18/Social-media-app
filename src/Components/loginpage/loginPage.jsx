import "./loginPage.css";
import axios from "axios";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { RiAlarmWarningFill } from 'react-icons/ri'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ---test case ---
// email: maloneylekan312@gmail.com
// password: doingthis

// --------------- PROJECT ENDPOINTS ------------------
// API URL -- https://loop-social-server-side.vercel.app/
// REGISTER endpoint -- /api/auth/register
// REGISTER DATA -- username, email, password
// LOGIN endpoint -- /api/auth/login
// LOGIN DATA -- email & password

function LoginPage() {
  const navigate = useNavigate();

  // ----------------  STATES ------------------
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [loadingDiv, setLoadingDiv] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  // const [token, setToken] = useState('')
  const [eyesOpen, setEyesOpen] = useState(false);

  // --------------- FUNCTIONS -----------------

  // --- The Login function --- 
  const Login = async () => {
    setLoadingDiv(true)
    try {
      const response = await axios.post(
        "https://loop-social-server-side.vercel.app/api/auth/login",
        userInfo
      );
      console.log(response.data);
      localStorage.setItem("token", JSON.stringify(response.data.token));
      setLoadingDiv(false)
      navigate('/')

    } catch (error) {
      console.log(error);
      setLoadingDiv(false)
      setErrorMessage(true)
    }
  };

  // --- onchange function for filling the user info ---
  const fillingData = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  // --- function for toggling password visibility ---
  const toggleEye = () => {
    setEyesOpen(!eyesOpen);
  };

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
      {loadingDiv ? 
        <div className="loading-div"> <AiOutlineLoading3Quarters className='loading-effect'/> </div>: 
        ''
      }
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <h2>Login</h2>
        { errorMessage ? <div className="error"> <RiAlarmWarningFill/> invalid email or password</div> : ''}
        <ul className="login-ul">
          <li>
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              name="email"
              className="input"
              type="email"
              id="email"
              value={userInfo.email}
              onChange={(e) => fillingData(e)}
              placeholder="example@gmail.com"
            />
          </li>

          <li>
            <label className="label" htmlFor="password">
              Password
            </label>

            <div className="input-cont">
              {eyesOpen ? (
                <input
                  name="password"
                  className="input eyes"
                  type="text"
                  id="password"
                  value={userInfo.password}
                  onChange={(e) => fillingData(e)}
                  placeholder="your password"
                />
              ) : (
                <input
                  name="password"
                  className="input eyes"
                  type="password"
                  id="password"
                  value={userInfo.password}
                  onChange={(e) => fillingData(e)}
                  placeholder="your password"
                />
              )}

              {userInfo.password.length !== 0 && (
                <span className="switchEye" onClick={toggleEye}>
                  {eyesOpen ? <FaEyeSlash /> : <FaEye />}
                </span>
              )}

              <span className="forget-password">Forgot password?</span>
            </div>
          </li>
        </ul>

        <div className="btn">
          <button
            className="login-btn"
            onClick={Login}
            disabled={
              userInfo.email.length === 0 || userInfo.password.length === 0
                ? true
                : false
            }
          >
            Login
          </button>
        </div>

        <p className="nav-to-signUp">
          You don't have an account yet?{" "}
          <span onClick={() => navigate("/sign-up")} className="sign-word">
            Sign up
          </span>
        </p>
      </form>

      <div className="illustration">
        <h1>Welcome back!</h1>
        <img src="illustrations/login.png" alt="illustration" />
      </div>
    </div>
  );
}

export default LoginPage;
