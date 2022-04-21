import { mdiThemeLightDark } from '@mdi/js';
import Icon from '@mdi/react';
import { ReactNode, useEffect, useState } from 'react';

function ThemeProvider(props: { children: ReactNode; className: string }) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState(localStorage.colorMode ? localStorage.colorMode : 'dark');

    useEffect(() => {
        if (!localStorage.colorMode && prefersDark) {
            setTheme('dark');
        }
        localStorage.colorMode = theme;
        console.log(`Current theme: ${theme}`);
    }, [theme]);

    const iconStyle = {
        transform: theme === 'light' ? 'rotate(180deg)' : '',
        transition: '200ms ease',
    } as React.CSSProperties;

    const containerStyle = {
        cursor: 'pointer',
        float: 'right',
        position: 'sticky',
        right: '1rem',
        top: '1rem',
    } as React.CSSProperties;

    const handleClick = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={props.className} data-theme={theme}>
            <div onClick={handleClick} style={containerStyle}>
                <Icon style={iconStyle} path={mdiThemeLightDark} size={1} />
            </div>
            {props.children}
        </div>
    );
}

export default ThemeProvider;
