import React from 'react';
import { Contacts, Description, Home, Info, Work } from 'styled-icons/material';

import '../style/Navbar.scss';

export const Navbar = ({ index, setIndex }: { index: number; setIndex: React.Dispatch<React.SetStateAction<number>> }) => {
    const setNavIndex = (i: number) => () => {
        setIndex(i);
    };
    return (
        <div className="navbar__body">
            <div className={`nav__item ${index === 0 ? 'active' : null}`} onClick={setNavIndex(0)}>
                <p>Resume</p>
                <Description size={26} />
            </div>
            <div className={`nav__item ${index === 1 ? 'active' : null}`} onClick={setNavIndex(1)}>
                <p>My work</p>
                <Work size={26} />
            </div>
            <div className={`nav__item ${index === 2 ? 'active' : null}`} onClick={setNavIndex(2)}>
                <p>Home</p>
                <Home size={26} />
            </div>

            <div className={`nav__item ${index === 3 ? 'active' : null}`} onClick={setNavIndex(3)}>
                <p>About me</p>
                <Info size={26} />
            </div>
            <div className={`nav__item ${index === 4 ? 'active' : null}`} onClick={setNavIndex(4)}>
                <p>Contacts</p>
                <Contacts size={26} />
            </div>
            <div className="indicator"></div>
        </div>
    );
};
