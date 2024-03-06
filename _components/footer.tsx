import { FontAwesomeIcon } from 'npm:@fortawesome/react-fontawesome';
import { faCopyright } from 'npm:@fortawesome/free-solid-svg-icons';

export default (data: Lume.Data, helpers: Lume.Helpers) => {
  return <>
    <footer className="flex mx-5 mb-5 pt-3 border-t border-slate-700">
      <div className="flex gap-2 items-center ml-3">
          <span className="w-3 h-3"><FontAwesomeIcon icon={faCopyright} /></span> 2023 <a href={data.github}>{data.author}</a>
            {/* <span title="Except where otherwise noted, the blog posts on this site are licensed under the Creative Commons Attribution 4.0 International (CC BY 4.0) License by the author." className="ml-5">Some rights reserved.</span> */}
      </div>
    </footer>
  </>
};