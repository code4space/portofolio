import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../assets/css/project.css";
import ticTacToe from '../assets/tictactoe.png'

export default function ProjectPage({ setActivePage, isMobile }) {
    function handleButton(linkTo) {
        window.open(linkTo, '_blank');
    }

    function card(data) {
        return (
            <div className="card-project" data-aos="fade-down">
                <div className="img-project"  onClick={() => { handleButton(data.linkTo) }}>
                    <img
                        src={data.image}
                        alt="my_project_img"
                    />
                    {isMobile ? (
                        <div className="mobile-card blur-img">
                            <h5>{data.release}</h5>
                            <h2>{data.projectName}</h2>
                            <p>{data.description}</p>
                            <div className="build">
                                {data.build.map((el, i) => {
                                    return (<span key={i}>{el}</span>)
                                })}
                            </div>
                            <div className="icon-detail">
                                <span onClick={() => { handleButton(data.github) }}>
                                    <FontAwesomeIcon icon={faGithub} />
                                </span>
                                <span onClick={() => { handleButton(data.linkTo) }}>&#8618;</span>
                            </div>
                        </div>
                    ) : (
                        <div className="blur-img img-hover"></div>
                    )}
                </div>
                {isMobile ? null : (
                    <div className="detail-card">
                        <h5>{data.release}</h5>
                        <h2>{data.projectName}</h2>
                        <div className="summary">
                            <p>{data.description}</p>
                        </div>
                        <div className="build">
                            {data.build.map((el, i) => {
                                return (<span key={i}>{el}</span>)
                            })}
                        </div>
                        <div className="icon-detail">
                            <span onClick={() => { handleButton(data.github) }}>
                                <FontAwesomeIcon icon={faGithub} />
                            </span>
                            <span onClick={() => { handleButton(data.linkTo) }}>&#8618;</span>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    const projectTicTacToe = {
        release: "2023",
        projectName: "Tic Tac Toe",
        description: `I've built this neon style Tic Tac Toe game using React. It's pretty simple and has this awesome neon light. You can check out the code on my github and enjoy the game!`,
        build: ["React", "Vite"],
        linkTo: 'https://neon-tic-tac-toe.vercel.app/',
        github: 'https://github.com/code4space/TicTacToe',
        image: ticTacToe
    };

    return (
        <div
            className="page project"
            id="work"
            onMouseEnter={() => {
                setActivePage(2);
            }}
        >
            <h1 data-aos="fade-down">
                <span></span>Work
            </h1>
            {card(projectTicTacToe)}
        </div>
    );
}
