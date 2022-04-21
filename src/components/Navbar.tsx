import { mdiAt, mdiCheck, mdiFileAccount, mdiHome, mdiInformation } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';
import '../style/Navbar.scss';

export const Navbar = ({ index, setIndex }: { index: number; setIndex: React.Dispatch<React.SetStateAction<number>> }) => {
    const setNavIndex = (i: number) => () => {
        setIndex(i);
    };
    return (
        <div className="navbar__body">
            <div className={`nav__item ${index === 0 ? 'active' : null}`} onClick={setNavIndex(0)}>
                <p>Resume</p>
                <Icon path={mdiFileAccount} size={1} />
            </div>
            <div className={`nav__item ${index === 1 ? 'active' : null}`} onClick={setNavIndex(1)}>
                <p>My work</p>
                <Icon path={mdiCheck} size={1} />
            </div>
            <div className={`nav__item ${index === 2 ? 'active' : null}`} onClick={setNavIndex(2)}>
                <p>Home</p>
                <Icon path={mdiHome} size={1} />
            </div>

            <div className={`nav__item ${index === 3 ? 'active' : null}`} onClick={setNavIndex(3)}>
                <p>About me</p>
                <Icon path={mdiInformation} size={1} />
            </div>
            <div className={`nav__item ${index === 4 ? 'active' : null}`} onClick={setNavIndex(4)}>
                <p>Contacts</p>
                <Icon path={mdiAt} size={1} />
            </div>
            <div className="indicator"></div>
        </div>
    );
};
