import { FontAwesomeIcon } from 'npm:@fortawesome/react-fontawesome';
import { faEnvelope } from 'npm:@fortawesome/free-solid-svg-icons';
import { faGithub, faMastodon, faLinkedin } from 'npm:@fortawesome/free-brands-svg-icons';

export default (data: Lume.Data, helpers: Lume.Helpers) => {
  const emailHref = 'mailto:' + data.email;
  return (
    <div className="mt-auto mx-auto mb-9 flex flex-wrap items-center gap-4">
      <a href={data.github}>
        <FontAwesomeIcon icon={faGithub} className="w-5 h-5 dark:text-slate-500" />
      </a>
      <a href={emailHref}>
        <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 dark:text-slate-500" />
      </a>
      <a href={data.mastodon}>
        <FontAwesomeIcon icon={faMastodon} className="w-5 h-5 dark:text-slate-500" />
      </a>
      <a href={data.linkedin}>
        <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 dark:text-slate-500" />
      </a>
    </div>
  );
};