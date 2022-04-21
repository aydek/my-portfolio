import { mdiGithub, mdiChevronDoubleDown } from '@mdi/js';
import Icon from '@mdi/react';
import '../style/Home.scss';

export const About = () => {
    return (
        <div className="home__body">
            <div className="main__text">Welcome to my website!</div>
            <div className="sub__text">My name is Kestutis and I am a developer...</div>
            <a href="https://github.com/aydek/my-portfolio" className="link__button">
                <Icon path={mdiGithub} size={1} />
                <p>Source code for this website</p>
            </a>
            <div className="footer__text">
                <p>Scroll down or click on navigation items to see more</p>
                <Icon path={mdiChevronDoubleDown} size={5} />
            </div>
        </div>
    );
};