import { MailIcon } from '@heroicons/react/solid';
import '../style/Social.scss';
import { Github } from './svg/Github';

export const Social = () => {
    return (
        <div className="social__body">
            <a href="https://github.com/aydek">
                <Github />
            </a>
            <div>
                <MailIcon width={24} height={24} />
            </div>
        </div>
    );
};
