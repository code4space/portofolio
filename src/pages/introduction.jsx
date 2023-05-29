import '../assets/css/introduction.css'
import Navigation from '../components/navigation'

export default function IntroductionPage() {
    return (
        <div className='page introduction'>
            <div className='profile'>
                <h1>Hi, I'm William Wijaya</h1>
                <h2>Fullstack Developer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quia iusto deserunt provident iste hic quae eum neque corrupti vitae.</p>
                <div className='neon-button'>
                    <button>Hire Me</button>
                    <button>Let's Talk</button>
                </div>
            </div>
        </div>
    )
}