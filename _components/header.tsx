import { FontAwesomeIcon } from 'npm:@fortawesome/react-fontawesome';
import { faBars } from 'npm:@fortawesome/free-solid-svg-icons';

export default ({ comp, ...data }: Lume.Data, helpers: Lume.Helpers) => {
  return <>
    <div className="min-h-28 lg:min-h-0 flex pl-5 p-2 dark:bg-zinc-700 justify-between lg:justify-end items-center">
      <div className="lg:hidden flex gap-4 items-center">
        <button id="display-navigation" className="w-9 h-9 lg:w-5 lg:h-5 dark:text-slate-400">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h2 className="text-2xl mt-2 dark:text-slate-400">{data.siteTitle}</h2>
      </div>
      <div id="search" className="min-w-96 mr-10 lg:min-w-0"></div>
    </div>
  </>; 
}