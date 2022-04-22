import React from 'react';
import { ChevronDoubleDown } from 'styled-icons/heroicons-solid';
import { Github } from 'styled-icons/simple-icons';
import '../style/Home.scss';

export const Home = ({ setIndex, className }: { setIndex: React.Dispatch<React.SetStateAction<number>>; className: string }) => {
    const handleClick = () => {
        console.log('?');
        setIndex(3);
    };

    return (
        <div className={`home__body ${className}`}>
            <div className="main__text">Welcome to my website!</div>
            <div className="sub__text">My name is Kestutis and I am a developer...</div>
            <a href="https://github.com/aydek/my-portfolio" className="link__button">
                <Github size={26} />
                <p>Source code for this website</p>
            </a>
            <div className="footer__text" onClick={handleClick}>
                <p>Scroll down or click on navigation items to see more</p>
                <ChevronDoubleDown size={50} />
            </div>
        </div>
    );
};
