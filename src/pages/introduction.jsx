import '../assets/css/introduction.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useRef } from 'react';

export default function IntroductionPage() {

    return (
        <div className='page introduction' id='home'>
            <div className='profile'>
                <h1>Hi, I'm William Wijaya</h1>
                <h2>Designer & Developer</h2>
                <p>As a full stack developer and designer, I am interested
                    in developing scalable web applications and working across the
                    full stack.</p>
                <div className='neon-button'>
                    <button style={{ width: '200px' }}>Email Me</button>
                </div>
                <div className='neon-button social-media'>
                    <button><FontAwesomeIcon icon={faGithub} /></button>
                    <button><FontAwesomeIcon icon={faLinkedinIn} /></button>
                    <button><FontAwesomeIcon icon={faInstagram} /></button>
                </div>
            </div>
        </div>
    )
}