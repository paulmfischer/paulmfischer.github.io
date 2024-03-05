import { HomeIcon, InformationCircleIcon } from 'npm:@heroicons/react/24/solid';
import { Navigation } from "../models.ts";

const getIcon = (icon: string) => {
  if (icon === 'home') {
    return <HomeIcon />;
  } else if (icon === 'about') {
    return <InformationCircleIcon />;
  }
}

export default (data: Lume.Data, helpers: Lume.Helpers) => {
  return (
    <nav id="nav" className="lg:text-sm lg:leading-6 relative">
      <ul className="list-none pl-0">
        {data.navLinks.map((link: Navigation) => (
          <li key={link.text} className="my-5">
            <a href={link.href} className="dark:text-slate-500 not-prose text-lg flex">
              <div className="w-6 h-6 mr-4">{getIcon(link.icon)}</div>
              <span>{link.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};