import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

export default function NavBar({ setLogin }) {

    return (
        <div className='nav'>
            <img
                className='nav_logo'
                src={assets.logo}
                alt="Logo"
            />
            <ul className='nav_menu'>
                <li>
                    <NavLink to={'/'}
                        className='nav_list'>
                        home
                    </NavLink>
                </li>
                <li>
                    <a href={'#explore_menu'}
                        className='nav_list'>
                        menu
                    </a>
                </li>
                <li>
                    <a href={'#app_download'}
                        className='nav_list'>
                        mobile-app
                    </a>
                </li >
                <li>
                    <a href={'#footer'}
                        className='nav_list'>
                        contacts-us
                    </a>
                </li>
            </ul >
            <div className='nav_right'>
                <img
                    className='search_icon'
                    src={assets.search_icon}
                    alt="Icon"
                />
                <div className='nav_basket_icon'>
                    <img
                        className='basket_icon'
                        src={assets.basket_icon}
                        alt="Icon"
                    />
                    <div className='dot'></div>
                </div>
                <button
                    className='sign_in'
                    onClick={() => setLogin(true)}>
                    Sign in
                </button>
            </div>
        </div >
    )
}
