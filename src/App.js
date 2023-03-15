import './App.css';
import LoginPage from './Components/pages/loginpage/loginPage';
import SignUpPage from './Components/pages/signupPage/signUp';
// import ForgetPassword from './Components/pages/forget-password/forgetPassword';
import { Routes, Route } from 'react-router-dom'
import { MainContent } from './Components/user';
import { NotFound } from './Components/pages';
import UserProfile from './Components/user/profile/userProfile';
// import  axios from 'axios'
// import { useEffect, useState } from 'react';

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

function App() {

  // const [token, setToken] = useState('')

  // useEffect(() => {
  //   axios.post('https://loop-social-server-side.vercel.app/api/auth/register', {
  //     username: 'everyone',
  //     email: 'everyone@gmail.com',
  //     password: 'lakes'
  //   })
  //   .then((response) => {
  //     console.log(response.data);
  //     // setToken(response.user.token)
  //     // console.log(token)
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // }, [])

  return (
    <main className="App">
      <Routes>
        <Route path='/' element={<MainContent />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/user-profile' element={<UserProfile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
