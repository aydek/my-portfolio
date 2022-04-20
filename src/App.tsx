import ThemeProvider from './ThemeProvider';
import { Navbar } from './components/Navbar';
import './style/App.scss';
import { Home } from './components/Home';
import { Social } from './components/Social';

function App() {
    return (
        <ThemeProvider className="App">
            <Social />
            <Home />
            <Navbar />
        </ThemeProvider>
    );
}

export default App;
