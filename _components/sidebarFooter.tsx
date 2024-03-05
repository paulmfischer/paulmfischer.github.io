import { FontAwesomeIcon } from 'npm:@fortawesome/react-fontawesome';
import { faEnvelope } from 'npm:@fortawesome/free-solid-svg-icons';
import { faGithub, faMastodon, faLinkedin } from 'npm:@fortawesome/free-brands-svg-icons';

export default (data: Lume.Data, helpers: Lume.Helpers) => {
  return (
    <div className="mt-auto mx-auto mb-9 flex flex-wrap items-center gap-4">
      <a href="https://github.com/paulmfischer">
        <FontAwesomeIcon icon={faGithub} className="w-5 h-5 dark:text-slate-500" />
      </a>
      <a href="mailto:me@paulmfischer.dev">
        <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 dark:text-slate-500" />
      </a>
      <a href="https://social.linux.pizza/@fischerp">
        <FontAwesomeIcon icon={faMastodon} className="w-5 h-5 dark:text-slate-500" />
      </a>
      <a href="https://www.linkedin.com/in/paulmfischer">
        <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 dark:text-slate-500" />
      </a>
    </div>
  );
};