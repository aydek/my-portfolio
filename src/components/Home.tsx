import { useEffect, useState } from 'react';
import useIsMounted from '../hooks/isMounted';
import '../style/Home.scss';
import { ArrowDown } from './icons/ArrowDown';
import { Github } from './icons/Github';
import { ReactLogo } from './icons/ReactLogo';
import { Sass } from './icons/Sass';
import { Typescript } from './icons/Typescript';
import { Vite } from './icons/Vite';

const headText = 'Welcome to my website!';
let headIndex = 0;

export const Home = ({ setIndex, className }: { setIndex: React.Dispatch<React.SetStateAction<number>>; className: string }) => {
    const [head, setHead] = useState('');

    const isMounted = useIsMounted();

    useEffect(() => {
        setTimeout(() => {
            if (headIndex >= headText.length - 1) return;
            console.log(head);
            console.log(headIndex);
            if (isMounted) headIndex = headIndex + 1;
            setHead(head + headText[headIndex]);
        }, 300);
    }, [head]);

    const handleClick = () => {
        setIndex(1);
    };

    return (
        <div className={`home__body ${className}`}>
            <div className="main__text">{head}</div>
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
