import React from 'react'
import { assets } from '../../assets/assets'

export default function AppDownload() {
    return (
        <>
            <div className="app_download" id="app_download">
                <p>For Better Experience Download <br />Tomato App</p>
                <div className="app_download_platforms">
                    <img className='app_download_icon' src={assets.play_store} alt="Icon" />
                    <img className='app_download_icon' src={assets.app_store} alt="Icon" />
                </div>
            </div>
        </>
    )
}
