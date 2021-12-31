import React from 'react'
import pic from '../Assets/pic.jpeg'
import {FaLinkedin} from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'

function Card() {
    return (
        <div className="main-container">
            <div className="img-class">
                <img className="face-img" src= {pic}/>
            </div>
            <div className="info">
                <h2>Astro Monkey</h2>
                <p>Astronaut</p>
                <small>meetguleria.vercel.app</small>
            </div>
            <div className="buttons">
                <a className="email-btn">Email</a>
                <a className="linkedIn">LinkedIn</a>
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
            <div className="icons">
                <FaLinkedin size={45}/>
                <FaTwitterSquare size={45}/>
                <FaGithubSquare size={45}/>
                <FaInstagramSquare size={45}/>
            </div>
        </div>
    )
}

export default Card