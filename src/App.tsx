import ThemeProvider from './ThemeProvider';
import { Navbar } from './components/Navbar';
import './style/App.scss';
import { Home } from './components/Home';
import { Social } from './components/Social';
import { About } from './components/About';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import useIsMounted from './hooks/isMounted';

function App() {
    const [navIndex, setNavIndex] = useState(2);
    let fixVal = 2;
    let touchstartY = 0;
    let touchendY = 0;

    const isMounted = useIsMounted();

    useEffect(() => {
        window.addEventListener('mousewheel', handleKeyDown);
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('mousewheel', handleKeyDown);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    const handleKeyDown = (ev: any, touch = false) => {
        if (touch) {
            console.log('touch');
            if (touchstartY > touchendY) {
                if (fixVal === 2) fixVal = 3;
            } else {
                if (fixVal === 3) fixVal = 2;
            }
            setNavIndex(fixVal);
            return;
        }
        if (ev.deltaY > 0) {
            if (fixVal === 2) fixVal = 3;
        } else {
            if (fixVal === 3) fixVal = 2;
        }
    };

    const handleTouchStart = (ev: TouchEvent) => {
        touchstartY = ev.changedTouches[0].screenX;
    };

    const handleTouchEnd = (ev: TouchEvent) => {
        touchendY = ev.changedTouches[0].screenX;
        handleKeyDown({ deltaY: 0 }, true);
    };

    useEffect(() => {}, [navIndex]);

    return (
        <ThemeProvider className="App">
            <Social />
            <Home setIndex={setNavIndex} className={navIndex === 2 ? 'show' : 'hidden'} />
            <About className={isMounted ? (navIndex === 3 ? 'show' : 'hidden') : ''} />
            <Navbar index={navIndex} setIndex={setNavIndex} />
        </ThemeProvider>
    );
}

export default App;
