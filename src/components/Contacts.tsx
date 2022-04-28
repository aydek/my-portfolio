import { MailIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import '../style/Contacts.scss';
import { Discord } from './icons/Discord';
import { Facebook } from './icons/Facebook';
import { Github } from './icons/Github';

export const Contacts = ({ className }: { className: string }) => {
    const [discordClick, setDiscordClick] = useState(false);
    const [mailClick, setMailClick] = useState(false);
    const handleClick = (id: number) => () => {
        switch (id) {
            case 0: {
                navigator.clipboard.writeText('aydek#7260');
                setDiscordClick(true);
                return;
            }
            case 1: {
                navigator.clipboard.writeText('kestutisduoba1@gmail.com');
                setMailClick(true);
                return;
            }
            default:
                return;
        }
    };

    useEffect(() => {
        if (discordClick) {
            setTimeout(() => {
                setDiscordClick(false);
            }, 3000);
            return;
        }

        if (mailClick) {
            setTimeout(() => {
                setMailClick(false);
            }, 3000);
            return;
        }
    }, [discordClick, mailClick]);

    return (
        <div className={`contacts__body ${className}`}>
            <div className="sub__text">Fancy contact me?</div>
            <p>See my contacts below:</p>
            <div className="button__container">
                <a href="https://github.com/aydek" className="contacts__button__group">
                    <div className="button__left">
                        <Github />
                    </div>

                    <p>Github profile</p>

                    <div className="button__right">/aydek</div>
                </a>
                <div className={`contacts__button__group ${discordClick ? 'copied' : ''}`} onClick={handleClick(0)}>
                    <div className="button__left">
                        <Discord />
                    </div>

                    <p>Discord</p>

                    <div className="button__right">aydek #7260</div>
                </div>
                <a href="https://www.facebook.com/profile.php?id=100008409013520" className="contacts__button__group">
                    <div className="button__left">
                        <Facebook />
                    </div>

                    <p>Facebook profile</p>

                    <div className="button__right">Kestutis Duoba</div>
                </a>
                <div className={`contacts__button__group ${mailClick ? 'copied' : ''}`} onClick={handleClick(1)}>
                    <div className="button__left">
                        <MailIcon width={24} height={24} />
                    </div>

                    <p style={{ marginRight: '20px' }}>kestutisduoba1@gmail.com</p>
                </div>
            </div>
        </div>
    );
};
