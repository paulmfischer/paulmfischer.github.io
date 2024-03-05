import { FontAwesomeIcon } from 'npm:@fortawesome/react-fontawesome';
import { faHouse, faCircleInfo } from 'npm:@fortawesome/free-solid-svg-icons';
import { Navigation } from "../models.ts";

const getIcon = (icon: string) => {
  if (icon === 'home') {
    return <FontAwesomeIcon icon={faHouse} />;
  } else if (icon === 'about') {
    return <FontAwesomeIcon icon={faCircleInfo} />;
  }
}

export default (data: Lume.Data, helpers: Lume.Helpers) => {
  return (
    <nav id="nav" className="lg:text-sm lg:leading-6 relative">
      <ul className="list-none pl-0">
        {data.navLinks.map((link: Navigation) => (
          <li key={link.text} className="my-5">
            <a href={link.href} className="dark:text-slate-500 not-prose text-lg flex">
              <div className="w-5 h-5 mr-4">{getIcon(link.icon)}</div>
              <span>{link.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};