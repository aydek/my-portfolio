import ThemeProvider from './ThemeProvider';
import { Navbar } from './components/Navbar';
import './style/App.scss';
import { Home } from './components/Home';
import { About } from './components/About';
import { useEffect, useState } from 'react';
import useIsMounted from './hooks/isMounted';

let timeout = Date.now();
let touchstart = 0;
let touchend = 0;

function App() {
    const [navIndex, setNavIndex] = useState(0);

    const isMounted = useIsMounted();

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);
        window.addEventListener('touchstart', handleTouchStart, { passive: false });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [navIndex]);

    const handleScroll = (ev: any) => {
        if (timeout > Date.now()) return;

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
        touchstart = ev.changedTouches[0].screenY;
    };

    const handleTouchMove = (ev: TouchEvent) => {
        ev.preventDefault();
    };

    const handleTouchEnd = (ev: TouchEvent) => {
        touchend = ev.changedTouches[0].screenY;
        if (touchstart - touchend < -150) {
            handleScroll({ deltaY: -1 });
        } else if (touchstart - touchend > 150) {
            handleScroll({ deltaY: 1 });
        }
    };

    return (
        <ThemeProvider className="App">
            <Home setIndex={setNavIndex} className={navIndex === 0 ? 'show' : 'hidden'} />
            <About className={isMounted ? (navIndex === 1 ? 'show' : 'hidden') : ''} />
            <Navbar index={navIndex} setIndex={setNavIndex} />
        </ThemeProvider>
    );
}

export default App;
