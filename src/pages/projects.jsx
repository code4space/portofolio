import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../assets/css/project.css";
import ticTacToe from '../assets/tictactoe.png'
import erp from '../assets/erp.png'
import admin from '../assets/admin.png'
import pokemon from '../assets/pokemon.png'
import stackun from '../assets/stackun.png'

function CardProject({ release, projectName, description, build, linkTo, image, isMobile, github }) {

    function handleButton(linkTo) {
        window.open(linkTo, '_blank');
    }

    return (
        <div className="card-project" data-aos="fade-down" >
            <div className="img-project" onClick={() => { handleButton(linkTo) }}>
                <img
                    src={image}
                    alt="my_project_img"
                />
                {isMobile ? (
                    <div className="mobile-card blur-img">
                        <h5>{release}</h5>
                        <h2>{projectName}</h2>
                        <p>{description}</p>
                        <div className="build">
                            {build.map((el, i) => {
                                return (<span key={i}>{el}</span>)
                            })}
                        </div>
                        <div className="icon-detail">
                            {github ? (
                                <span onClick={() => { handleButton(github) }}>
                                    <FontAwesomeIcon icon={faGithub} />
                                </span>
                            ) : null}
                            <span onClick={() => { handleButton(linkTo) }}>&#8618;</span>
                        </div>
                    </div>
                ) : (
                    <div className="blur-img img-hover"></div>
                )}
            </div>
            {isMobile ? null : (
                <div className="detail-card">
                    <h5>{release}</h5>
                    <h2>{projectName}</h2>
                    <div className="summary">
                        <p>{description}</p>
                    </div>
                    <div className="build">
                        {build.map((el, i) => {
                            return (<span >{el}</span>)
                        })}
                    </div>
                    <div className="icon-detail">
                        {github ? (
                            <span onClick={() => { handleButton(github) }}>
                                <FontAwesomeIcon icon={faGithub} />
                            </span>
                        ) : null}
                        <span onClick={() => { handleButton(linkTo) }}>&#8618;</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default function ProjectPage({ setActivePage, isMobile }) {

    const project = [
        {
            release: "2024",
            projectName: "ERP Demo",
            description: `'A modern, web-based ERP system designed to streamline and manage core business processes across departments. this app delivers a clean, responsive, and user-friendly interface for enterprise users.',`,
            build: ["React", "Vite", 'MUI', 'Tailwind'],
            linkTo: 'https://demo-erp-gray.vercel.app',
            image: erp
        },
        {
            release: "2023",
            projectName: "Admin Tamplate",
            description: `I develop React-based admin templates that are responsive and leverage the EChart library for interactive charts.`,
            build: ["React", "Vite", 'EChart'],
            linkTo: 'https://admin-two-tau.vercel.app/',
            github: 'https://github.com/code4space/admin-tamplate',
            image: admin
        },
        {
            release: "2023",
            projectName: "Pokemon Collection",
            description: <span>I am developing a web-based Pokémon Gacha game using React. For the server-side, I am utilizing Express.js. If you are interested in trying out my game locally, please ensure that you have the server running. You can find instructions on how to run the server-side on my <a style={{ color: "inherit" }} target="_blank" href="https://github.com/code4space/pokemonGame-backEnd-NoSQL">GitHub repository</a>.</span>,
            build: ["React", "Vite", 'Express JS'],
            linkTo: 'https://pokemon-collection-game.vercel.app/',
            github: 'https://github.com/code4space/pokemonGame-frontEnd',
            image: pokemon
        },
        {
            release: "2023",
            projectName: "Stackun ",
            description: `It's sliding puzzle game using React with a 4x4 grid. The code is pretty simple, and I've given it a wooden theme for a cozy feel. Go checkout how i make it on my github`,
            build: ["React", "Vite"],
            linkTo: 'https://stackun.vercel.app/',
            github: 'https://github.com/code4space/stackun',
            image: stackun
        },
        {
            release: "2022",
            projectName: "Tic Tac Toe",
            description: `I've built this neon style Tic Tac Toe game using React. It's pretty simple and has this awesome neon light. You can check out the code on my github and enjoy the game!`,
            build: ["React", "Vite"],
            linkTo: 'https://neon-tic-tac-toe.vercel.app/',
            github: 'https://github.com/code4space/TicTacToe',
            image: ticTacToe
        },
    ]

    return (
        <div
            className="page project"
            id="showcase"
            onMouseEnter={() => {
                setActivePage(2);
            }}
        >
            <h1 data-aos="fade-down">
                <span></span>Showcase
            </h1>
            {project.map((data, i) => {
                return <CardProject key={i} {...data} isMobile={isMobile} />
            })}
        </div>
    );
}
