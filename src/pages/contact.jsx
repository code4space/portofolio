import '../assets/css/contact.css'

export default function ContactPage({setActivePage}) {
    function handleEmail () {
        window.open('mailto:mauritius.william.wijaya1@gmail.com', '_blank');
      }
    return (
        <div className="page contact" data-aos="fade-down" id='contact' onMouseEnter={() => {setActivePage(3)}}>
            
            <h6>Interested in collaborating?</h6>
            <h1>React Me Out</h1>
            <p>I'm always available to connect. Whether you have a query or simply want to extend a greeting, I'll make every effort to respond promptly. Don't hesitate to reach out and get in touch!</p>
            <div className='neon-button'>
                <button onClick={handleEmail}>Start a converstation</button>
            </div>
            <span>&#169;William 2023 | Designed and Created by William</span>
        </div>
    )
}