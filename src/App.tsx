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

    const isMounted = useIsMounted();

    useEffect(() => {
        window.addEventListener('mousewheel', handleKeyDown);

        return () => {
            window.removeEventListener('mousewheel', handleKeyDown);
        };
    }, []);

    const handleKeyDown = (ev: any) => {
        if (ev.deltaY > 0) {
            if (fixVal === 2) fixVal = 3;
        } else {
            if (fixVal === 3) fixVal = 2;
        }
        setNavIndex(fixVal);
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
