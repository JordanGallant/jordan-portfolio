import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';


const About =() =>{
    const [letterClass] = useState('text-animate')
return (
    <div className='container about-page'>
        <div className='text-zone'>
        <h1>
        <AnimatedLetters
        letterClass={letterClass}
        strArray={['A','b','o','u','t',' ','M','e']}
        idx ={15}
        />
        </h1>
        <p> I'm very ambitious front-end developer and UI/UX Designer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.</p>

        <p> I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.</p>

        <p>I am interested in many things such as: Cyber security, Music Production, Arduino, Machine Learning and AI</p>
        </div>
        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon ={faAngular} color ="#DD0031"/>
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon ={faHtml5} color ="#F06529"/>
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon ={faCss3} color ="#28A4D9"/>
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon ={faPython} color ="black"/>
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon ={faReact} color ="#5ED4F4"/>
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon ={faJsSquare} color ="#EFD81D"/>
                </div>

            </div>
        </div>

    </div>
)
}

export default About;