import ThemeProvider from './ThemeProvider';
import { Navbar } from './components/Navbar';
import './style/App.scss';
import { Home } from './components/Home';
import { Social } from './components/Social';
import { About } from './components/About';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import useIsMounted from './hooks/isMounted';

let timeout = Date.now();

function App() {
    const [navIndex, setNavIndex] = useState(0);

    let fixVal = 0;
    let touchstartY = 0;
    let touchendY = 0;

    const isMounted = useIsMounted();

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);
        // window.addEventListener('touchstart', handleTouchStart);
        // window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('wheel', handleScroll);
            // window.removeEventListener('touchstart', handleTouchStart);
            // window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [navIndex]);

    const handleScroll = (ev: any, touch = false) => {
        if (timeout > Date.now()) return;
        if (touch) {
            if (touchstartY > touchendY) {
                if (fixVal === 2) fixVal = 3;
            } else {
                if (fixVal === 3) fixVal = 2;
            }
            setNavIndex(fixVal);
            return;
        }

        if (ev.deltaY > 0) {
            let current = navIndex;
            current = current + 1;
            if (current > 4) current = 0;
            setNavIndex(current);
        } else {
            let current = navIndex;
            current = current - 1;
            if (current < 0) current = 4;
            setNavIndex(current);
        }
        timeout = Date.now() + 1000;
    };

    const handleTouchStart = (ev: TouchEvent) => {
        touchstartY = ev.changedTouches[0].screenX;
    };

    const handleTouchEnd = (ev: TouchEvent) => {
        touchendY = ev.changedTouches[0].screenX;
        handleScroll({ deltaY: 0 }, true);
    };

    return (
        <ThemeProvider className="App">
            <Social />
            <Home setIndex={setNavIndex} className={navIndex === 0 ? 'show' : 'hidden'} />
            <About className={isMounted ? (navIndex === 1 ? 'show' : 'hidden') : ''} />
            <Navbar index={navIndex} setIndex={setNavIndex} />
        </ThemeProvider>
    );
}

export default App;
