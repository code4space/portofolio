import '../assets/css/navigation.css'

export default function Navigation() {
    return (
        <div className='navigation'>
            <h2>William.</h2>
            <ul>
                <li style={{fontWeight:'700', color:'#f3aa4e'}}>Home</li>
                <li>About</li>
                <li>Portofolio</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}