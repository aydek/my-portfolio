import '../style/Home.scss';
import { ArrowDown } from './icons/ArrowDown';
import { Github } from './icons/Github';
import { ReactLogo } from './icons/ReactLogo';
import { Sass } from './icons/Sass';
import { Typescript } from './icons/Typescript';
import { Vite } from './icons/Vite';

export const Home = ({ setIndex, className }: { setIndex: React.Dispatch<React.SetStateAction<number>>; className: string }) => {
    const handleClick = () => {
        setIndex(1);
    };

    return (
        <div className={`home__body ${className}`}>
            <div className="main__text">Welcome to my website!</div>
            <div className="sub__text">My name is Kestutis and I am a developer...</div>
            <a href="https://github.com/aydek/my-portfolio" className="link__button">
                <Github />
                <p>Source code for this website</p>
            </a>
            <div className="providers">
                <p>Build with</p>
                <div>
                    <ReactLogo />
                    <Vite />
                    <Typescript />
                    <Sass />
                </div>
            </div>

            <div className="footer__text" onClick={handleClick}>
                <p>Scroll down or click on navigation items to see more</p>
                <ArrowDown />
            </div>
        </div>
    );
};
