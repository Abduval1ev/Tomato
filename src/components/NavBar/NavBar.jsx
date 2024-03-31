import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'

export default function NavBar({ setLogin }) {

    const { getTotalCartAmount } = React.useContext(StoreContext)

    return (
        <div className='nav'>
            <Link to={'/'}>
                <img
                    className='nav_logo'
                    src={assets.logo}
                    alt="Logo"
                />
            </Link>
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
                    <Link to={'/cart'}>
                        < img
                            className='basket_icon'
                            src={assets.basket_icon}
                            alt="Icon"
                        />
                    </Link>
                    <div
                        className={getTotalCartAmount() === 0 ? '' : 'dot'}>
                    </div>
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
