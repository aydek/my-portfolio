import '../style/Contacts.scss';
import { Github } from './icons/Github';

export const Contacts = ({ className }: { className: string }) => {
    return (
        <div className={`contacts__body ${className}`}>
            <div className="sub__text">Fancy contact me?</div>
            <p>See my contacts below:</p>
            <a href='https://github.com/aydek' className="contacts__button__group">
                <Github />
                <p>Github profile /aydek</p>
            </a>
        </div>
    );
};
