import '../style/About.scss';

export const About = ({ className }: { className: string }) => {
    return (
        <div className={`about__body ${className}`}>
            <div className="sub__text">My about page</div>

            <div className="footer__text">
                <p>Scroll down or click on navigation items to see more</p>
            </div>
        </div>
    );
};
