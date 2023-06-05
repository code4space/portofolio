import '../assets/css/introduction.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useRef } from 'react';

export default function IntroductionPage({setActivePage}) {
    function handleButton (linkTo) {
        if (linkTo === 'In') window.open('https://www.linkedin.com/in/william-wijaya-2a22871b2/', '_blank');
        else if (linkTo === 'Git') window.open('https://github.com/code4space', '_blank');
        else if (linkTo === 'Ig') window.open('https://www.instagram.com/mauritius_william/', '_blank');
        else if (linkTo === 'Mail') window.open('mailto:mauritius.william.wijaya1@gmail.com', '_blank');
    } 
    return (
        <div className='page introduction' id='home' onMouseEnter={() => {setActivePage(1)}}>
            <div className='profile'>
                <h1>Hi, I'm William Wijaya</h1>
                <h2>Designer & Developer</h2>
                <p>As a full stack developer and designer, I am interested
                    in developing scalable web applications and working across the
                    full stack.</p>
                <div className='neon-button'>
                    <button style={{ width: '200px' }} onClick={() => {handleButton('Mail')}}>Email Me</button>
                </div>
                <div className='neon-button social-media'>
                    <button onClick={() => {handleButton('Git')}}><FontAwesomeIcon icon={faGithub} /></button>
                    <button onClick={() => {handleButton('In')}}><FontAwesomeIcon icon={faLinkedinIn} /></button>
                    <button onClick={() => {handleButton('Ig')}}><FontAwesomeIcon icon={faInstagram} /></button>
                </div>
            </div>
        </div>
    )
}