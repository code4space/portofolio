import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../assets/css/project.css'

export default function ProjectPage({ setActivePage, isMobile }) {
    return (
        <div className="page project" id='work' onMouseEnter={() => { setActivePage(2) }}>
            <h1 data-aos="fade-down"><span></span>Work</h1>
            <div className='card-project' data-aos="fade-down">
                <div className='img-project'>
                    <img src="https://thumbs.dreamstime.com/b/mountain-landscape-hiking-trail-view-beautiful-lakes-ponta-delgada-sao-miguel-island-azores-portugal-75384203.jpg" alt="" />
                    {isMobile ? <div className='mobile-card blur-img'>
                        <h5>Ongoing</h5>
                        <h2>Pokémon Game</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero hic doloribus accusamus itaque qui explicabo ipsa deserunt odit veritatis consequuntur.</p>
                        <div className='build'>
                            <span>Poke API</span>
                            <span>React</span>
                            <span>Express</span>
                            <span>Node Js</span>
                        </div>
                        <div className='icon-detail'>
                            <span><FontAwesomeIcon icon={faGithub} /></span>
                            <span>&#8618;</span>
                        </div>
                    </div> : 
                    <div className='blur-img img-hover'></div>}
                </div>
                {isMobile ? null :
                    <div className='detail-card'>
                        <h5>Ongoing</h5>
                        <h2>Pokémon Game</h2>
                        <div className='summary'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero hic doloribus accusamus itaque qui explicabo ipsa deserunt odit veritatis consequuntur.</p>
                        </div>
                        <div className='build'>
                            <span>Poke API</span>
                            <span>React</span>
                            <span>Express</span>
                            <span>Node Js</span>
                        </div>
                        <div className='icon-detail'>
                            <span><FontAwesomeIcon icon={faGithub} /></span>
                            <span>&#8618;</span>
                        </div>
                    </div>
                }
            </div>
            <div className='card-project' data-aos="fade-down">
                <div className='img-project'>
                    <img src="https://thumbs.dreamstime.com/b/mountain-landscape-hiking-trail-view-beautiful-lakes-ponta-delgada-sao-miguel-island-azores-portugal-75384203.jpg" alt="" />
                    {isMobile ? <div className='mobile-card blur-img'>
                        <h5>2023</h5>
                        <h2>Pokémon Game</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero hic doloribus accusamus itaque qui explicabo ipsa deserunt odit veritatis consequuntur.</p>
                        <div className='build'>
                            <span>Poke API</span>
                            <span>React</span>
                            <span>Express</span>
                            <span>Node Js</span>
                        </div>
                        <div className='icon-detail'>
                            <span><FontAwesomeIcon icon={faGithub} /></span>
                            <span>&#8618;</span>
                        </div>
                    </div> : 
                    <div className='blur-img img-hover'></div>}
                </div>
                {isMobile ? null :
                    <div className='detail-card'>
                        <h5>2023</h5>
                        <h2>Pokémon Game</h2>
                        <div className='summary'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero hic doloribus accusamus itaque qui explicabo ipsa deserunt odit veritatis consequuntur.</p>
                        </div>
                        <div className='build'>
                            <span>Poke API</span>
                            <span>React</span>
                            <span>Express</span>
                            <span>Node Js</span>
                        </div>
                        <div className='icon-detail'>
                            <span><FontAwesomeIcon icon={faGithub} /></span>
                            <span>&#8618;</span>
                        </div>
                    </div>
                }
            </div>
            
        </div>
    )
}