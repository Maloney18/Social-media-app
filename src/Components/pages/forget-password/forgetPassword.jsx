import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import './forgetPassword.css'

const ForgetPassword = () => {
    const navigate = useNavigate()

    const [otp, setOtp] = useState(new Array(4).fill(''))
    const [userInfo, setUserInfo] = useState({email: ""})

    
    const [toggle, setToggle] = useState(true)


    // --------------- FUNCTIONS -------------------

    const fillingData = (e) => {
        const { name, value } = e.target;
        setUserInfo({[name]: value });
    };

    const fillingData1 = (e,index) => {
        const {previousSibling, nextSibling, value} = e.target
        if (isNaN(value)) return false

        setOtp([...otp.map((d, idx) => (idx === index) ? value : d)]);
        
        //Focus prev input
        if(!value && previousSibling){
            previousSibling.focus();
            return
        }
        //FOCUS NEXT INPUT
        if(nextSibling && value){
            nextSibling.focus();
        }
    }

    const toggleHandler = () => {
        if (toggle) return setToggle(!toggle)

        if (!toggle) return setToggle(!toggle)
    }

    return (
        <div className='forget-page'>
            {/* <div> */}
                <ul className='forget-ul'>
                   {    toggle ? 
                        <li className='forget-email-cont flex'>
                            <div> <span className='going-back' /*onClick={() => navigate('/login')}*/> <HiArrowNarrowLeft/> Back</span> </div>

                            <div className='forget-pass-cont flex'>
                                <h2>Forgot password ?</h2>
                                <p className='forget-info'>Enter your registered email below to recieve password reset instructions</p>
                            </div>

                            <div className='both flex'>
                                <div className='email-cont flex'>
                                    <label htmlFor="fEmail">Email address</label>
                                    <input 
                                        className='forget-input'
                                        type="email" 
                                        name='email'
                                        id='fEmail'
                                        value={userInfo.email}
                                        onChange={(e) => fillingData(e)}
                                        placeholder='example@gmail.com'
                                        required
                                    />
                                </div>
                                
                                <div className='verify-email'>
                                    <button disabled={!userInfo.email} onClick={toggleHandler}>Next</button>
                                </div>
                            </div>

                        </li> : 
                        <li className='otp-cont'>
                            <label htmlFor="otp">Verification Code</label>
                            {
                                otp.map((data, index) => {
                                    return <input
                                        className="otp"
                                        placeholder=""
                                        pattern="\d*"
                                        maxLength="1"
                                        name="otp"
                                        key={index}
                                        value={data}
                                        onChange={(e) => fillingData1(e, index)}
                                        onFocus={e => e.target.focus()}
                                        required
                                    />
                                })
                            }
                            
                            <div>
                                <button onClick={toggleHandler}>Back</button>
                                <button disabled={otp[0] === '' || otp[1] === '' || otp[2] === '' || otp[3] === ''} onClick={() => navigate('/login')}> Verify <FaArrowRight /></button>
                            </div>
                        </li>
                    }
                </ul>
            {/* </div> */}
        </div>
    )
}

export default ForgetPassword
