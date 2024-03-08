import { FontAwesomeIcon } from 'npm:@fortawesome/react-fontawesome';
import { faBars } from 'npm:@fortawesome/free-solid-svg-icons';

export default ({ comp, ...data }: Lume.Data, helpers: Lume.Helpers) => {
  return <>
    <div className="flex pl-5 p-2 dark:bg-zinc-700 justify-between lg:justify-end items-center">
      <div className="lg:hidden">
        <button id="display-navigation" className="w-9 h-9 lg:w-5 lg:h-5 dark:text-slate-400">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div id="search" className="mr-10"></div>
    </div>
  </>; 
}