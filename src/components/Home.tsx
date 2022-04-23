import { ChevronDoubleDownIcon } from '@heroicons/react/solid';
import React from 'react';

import '../style/Home.scss';
import { Github } from './svg/Github';
import { ReactLogo } from './svg/ReactLogo';
import { Sass } from './svg/Sass';
import { Typescript } from './svg/Typescript';
import { Vite } from './svg/Vite';

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
                <ChevronDoubleDownIcon width={50} height={50} />
            </div>
        </div>
    );
};
