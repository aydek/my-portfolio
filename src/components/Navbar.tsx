import { AtSymbolIcon, BriefcaseIcon, DocumentTextIcon, HomeIcon, InformationCircleIcon } from '@heroicons/react/solid';
import React from 'react';

import '../style/Navbar.scss';

export const Navbar = ({ index, setIndex }: { index: number; setIndex: React.Dispatch<React.SetStateAction<number>> }) => {
    const setNavIndex = (i: number) => () => {
        setIndex(i);
    };
    return (
        <div className="navbar__body">
            <div className={`nav__item ${index === 4 ? 'active' : null}`} onClick={setNavIndex(4)}>
                <p>Contacts</p>
                <AtSymbolIcon width={24} height={24} />
            </div>
            <div className={`nav__item ${index === 2 ? 'active' : null}`} onClick={setNavIndex(2)}>
                <p>My work</p>
                <BriefcaseIcon width={24} height={24} />
            </div>
            <div className={`nav__item ${index === 0 ? 'active' : null}`} onClick={setNavIndex(0)}>
                <p>Home</p>
                <HomeIcon width={24} height={24} />
            </div>

            <div className={`nav__item ${index === 1 ? 'active' : null}`} onClick={setNavIndex(1)}>
                <p>About me</p>
                <InformationCircleIcon width={24} height={24} />
            </div>
            <div className={`nav__item ${index === 3 ? 'active' : null}`} onClick={setNavIndex(3)}>
                <p>Resume</p>
                <DocumentTextIcon width={24} height={24} />
            </div>
            <div className="indicator"></div>
        </div>
    );
};
