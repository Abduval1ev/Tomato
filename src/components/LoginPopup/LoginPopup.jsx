import React from 'react'
import { assets } from '../../assets/assets'

export default function LoginPopup({ setLogin }) {

    const [currState, setCurrState] = React.useState('Sign Up')

    return (
        <>
            <div className="login_popup">
                <form className='login_popup_container'>
                    <div className="login_popup_title">
                        <h2>{currState}</h2>
                        <img
                            className='login_popup_title_icon'
                            onClick={() => setLogin(false)}
                            src={assets.cross_icon}
                            alt="Icon" />
                    </div>
                    <div className="login_popup_inputs">
                        {currState === 'Login'
                            ? <></> :
                            <input
                                className='login_popup_input'
                                type="text"
                                placeholder='Your name'
                                required
                            />
                        }
                        <input
                            className='login_popup_input'
                            type="email"
                            placeholder='Your email'
                            required
                        />
                        <input
                            className='login_popup_input'
                            type="password"
                            placeholder='Password'
                            required
                        />
                    </div>
                    <button
                        className='login_popup_btn'>
                        {currState === 'Sign Up'
                            ?
                            'Create account'
                            :
                            'Login'}
                    </button>
                    <div className="login_popup_condition">
                        <input className='login_popup_checkbox' type="checkbox" required />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    {
                        currState === 'Login' ?
                            <p>
                                Create a new account?
                                <span className='login_register_text' onClick={() =>
                                    setCurrState('Sign Up')}>
                                    Click here
                                </span>
                            </p> :
                            <p>
                                Already have account?
                                <span className='login_register_text' onClick={() =>
                                    setCurrState('Login')}>
                                    Login here
                                </span>
                            </p>
                    }
                </form>
            </div>
        </>
    )
}
