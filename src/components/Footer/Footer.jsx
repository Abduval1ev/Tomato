import React from 'react'
import { assets } from '../../assets/assets'
export default function Footer() {
  return (
    <>
      <footer className="footer" id='footer'>
        <div className="footer_content">
          <div className="footer_content_left">
            <img className='logo' src={assets.logo} alt="Logo" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, saepe eius labore officia unde nobis reiciendis deserunt nostrum ipsa, nisi fugiat blanditiis, distinctio sequi facilis ipsum veritatis! Officia, iusto quia.
            </p>
            <div className="footer_social_icon">
              <img
                className='social_icon'
                src={assets.facebook_icon}
                alt="Icon"
              />
              <img
                className='social_icon'
                src={assets.twitter_icon}
                alt="Icon"
              />
              <img
                className='social_icon'
                src={assets.linkedin_icon}
                alt="Icon"
              />
            </div>
          </div>
          <div className="footer_contet_center">
            <h2 className='footer_heading'>Company</h2>
            <ul className="footer_lists">
              <li className="footer_list">Home</li>
              <li className="footer_list">About</li>
              <li className="footer_list">Delivery</li>
              <li className="footer_list">Privace policy</li>
            </ul>
          </div>
          <div className="footer_content_right">
            <h2 className='footer_heading'>Get In Touch</h2>
            <ul>
              <li>+998 (90) 064-28-09</li>
              <li>contact@tomato.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer_copyright">
          Copyright 2024 @ Tomato.com - All Right Reserver.
        </p>
      </footer >
    </>
  )
}
