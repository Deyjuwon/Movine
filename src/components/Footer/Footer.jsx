import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
        <div className='footer1'>
            <p><span>Mov</span><span className='logo'>ine</span></p>
            <div className='footer1-sub'>
                <p>Get in touch with us</p>
                <div className='socials'>
                    <FaFacebookF size={28} />
                    <FaGoogle size={28} />
                    <FaXTwitter size={28} />

                </div>
                
            </div>
        </div>
        <div className='footer2'>
            <p className='f-head'>Company</p>
            <a href="">About</a>
            <a href="">Careers</a>
            <a href="">Our Culture</a>
            <a href="">Press Room</a>
            <a href="">Patners</a>
            <a href="">Giving</a>

        </div>
        <div className="footer2">
            <p className='f-head'>Movine</p>
            <a href="">Go Premium</a>
            <a href="">Get Now</a>
        </div>
        <div className="footer2">
            <p className='f-head'>Downloads</p>
            <a href="">Site Media Server</a>
            <a href="">Apps & Devices</a>
            <a href="">Where To Watch</a>
        </div>
        <div className="footer2">
            <p className='f-head'>Supoort</p>
            <a href="">Finding Help</a>
            <a href="">Support LIbrary</a>
            <a href="">Community Forum</a>
            <a href="">Patners</a>
            <a href="">Get In Touch</a>
        </div>
        <div className="footer2">
            <p className='f-head'>Watch Free</p>
            <a href="">TV Channel Finder</a>
            <a href="">What To Watch</a>
            <a href="">What To Watch On Help</a>
        </div>

    </footer>
  )
}

export default Footer