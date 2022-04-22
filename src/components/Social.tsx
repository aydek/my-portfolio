import { Mail } from 'styled-icons/material';
import { Github } from 'styled-icons/simple-icons';
import '../style/Social.scss';

export const Social = () => {
    return (
        <div className="social__body">
            <a href="https://github.com/aydek">
                <Github size={26} />
            </a>
            <div>
                <Mail size={26} />
            </div>
        </div>
    );
};
