import Icon from '@mdi/react';
import { mdiEmail, mdiGithub } from '@mdi/js';
import '../style/Social.scss';

export const Social = () => {
    return (
        <div className="social__body">
            <a href="https://github.com">
                <Icon path={mdiGithub} size={1} />
            </a>
            <div>
                <Icon path={mdiEmail} size={1} />
            </div>
        </div>
    );
};
