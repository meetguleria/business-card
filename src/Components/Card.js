import React, {useState} from 'react'
import pic from '../Assets/pic.jpeg'
import {FaLinkedin} from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { IconName } from "react-icons/md";
import { css } from '@emotion/css'
import '../App.css'

function Card() {

    const [background, setBackground] = useState('#000000')

    const [fontColor, setFontColor] = useState('yellow')

    const setStyle = (background, fontColor) => {
        setBackground(background)
        setFontColor(fontColor)
    }

    const main_container = css`
        position: static;
        top: 10px;
        width: 317px;
        height: 650px;
        margin: 0 auto;
        background: ${background};
        border-radius: 6px;
        overflow: hidden;
        color: ${fontColor};
        `;
    
    const icons = css`
    background: ${background}
    margin-bottom: 10px;
    `;

    return (

        <>
        <div className="biggest-container">
        <div className={main_container}>
                <div className="img-class">
                    <img className="face-img" src={pic} />
                </div>
                <div className="info">
                    <h2>Astro Monkey</h2>
                    <p>Astronaut</p>
                    <small>planetoftheapes.com</small>
                </div>
                <div className="buttons">
                    <a  className="email-btn"><svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.102406 1.70721L6.50001 4.90561L12.8976 1.70721C12.8739 1.29957 12.6953 0.916403 12.3983 0.636194C12.1012 0.355985 11.7083 0.199937 11.3 0.200012H1.70001C1.29167 0.199937 0.898764 0.355985 0.601748 0.636194C0.304733 0.916403 0.126089 1.29957 0.102406 1.70721Z" fill="#1E1F26"/>
<path d="M12.9 3.49441L6.50001 6.69441L0.100006 3.49441V8.20001C0.100006 8.62436 0.268577 9.03133 0.568635 9.33138C0.868693 9.63144 1.27566 9.80001 1.70001 9.80001H11.3C11.7244 9.80001 12.1313 9.63144 12.4314 9.33138C12.7314 9.03133 12.9 8.62436 12.9 8.20001V3.49441Z" fill="#1E1F26"/>
</svg>Email</a>
                    <a className="linkedIn"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7143 1.33334H2.28275C1.75894 1.33334 1.33334 1.76489 1.33334 2.29465V13.7054C1.33334 14.2351 1.75894 14.6667 2.28275 14.6667H13.7143C14.2381 14.6667 14.6667 14.2351 14.6667 13.7054V2.29465C14.6667 1.76489 14.2381 1.33334 13.7143 1.33334ZM5.36311 12.7619H3.38691V6.39882H5.36608V12.7619H5.36311ZM4.37501 5.52977C3.74108 5.52977 3.22918 5.01489 3.22918 4.38394C3.22918 3.75299 3.74108 3.23811 4.37501 3.23811C5.00596 3.23811 5.52084 3.75299 5.52084 4.38394C5.52084 5.01787 5.00894 5.52977 4.37501 5.52977ZM12.7708 12.7619H10.7947V9.66668C10.7947 8.92858 10.7798 7.97918 9.76787 7.97918C8.73811 7.97918 8.58037 8.78275 8.58037 9.61311V12.7619H6.60418V6.39882H8.50001V7.26787H8.5268C8.79168 6.76787 9.43751 6.24108 10.3988 6.24108C12.3988 6.24108 12.7708 7.55953 12.7708 9.27382V12.7619Z" fill="white"/>
</svg>LinkedIn</a>
                </div>
                    <div className="about">
                        <h2>About:</h2>
                        <p>I am a passionate Astronaut and I love exploring the space and visiting
                            different planets. I have been to the Moon, Mars and Jupiter. I aim to takeover
                            the Earth with my fellow Apes.</p>
                    </div>
                    <div className="interest">
                        <h2>Interests:</h2>
                        <p>Foodie. Loves Bananas. Music Scholar. Reader. Internet Fanatic.
                            Travel Geek. Entrepreneur</p>
                    </div>
                <div className={icons}>
                    <FaLinkedin size={40} />
                    <FaTwitterSquare size={40} />
                    <FaGithubSquare size={40} />
                    <FaInstagramSquare size={40} />
                </div>
            </div>

            <div>
            <div className="theme-buttons">
                <button onClick ={() => setStyle("#FFFF00", "#000000")} className="light-theme">
                    Yellow Theme
                </button>
                <button onClick ={() => setStyle("#000000", "#FFFF00")} className="dark-theme">
                    Dark Theme
                </button>
            </div>

        </div>
        </div>
            </>
    )
}

export default Card