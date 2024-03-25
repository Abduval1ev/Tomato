import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

export default function NavBar() {

    // const active = 'nav_list';
    // const normalLink = 'nav_list nav_list__active';

    return (
        <div className='nav'>
            <img
                className='nav_logo'
                src={assets.logo}
                alt="Logo"
            />
            <ul className='nav_menu'>
                <li>
                    <NavLink
                        className='nav_list'>
                        home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className='nav_list'>
                        menu
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className='nav_list'>
                        mobile-app
                    </NavLink>
                </li >
                <li>
                    <NavLink
                        className='nav_list'>
                        contacts-us
                    </NavLink>
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
                <button className='sign_in'>Sign in</button>
            </div>
        </div >
    )
}
