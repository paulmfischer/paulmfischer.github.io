import { FontAwesomeIcon } from 'npm:@fortawesome/react-fontawesome';
import { faTag } from 'npm:@fortawesome/free-solid-svg-icons';
export const layout = "layouts/main.tsx";

export default ({ title, children, github, author, date, tags, comp }: Lume.Data, { date: helperDate }: Lume.Helpers) => (
  <>
    <div className="">
      <h2 className="mt-4 mb-3 text-6xl lg:text-3xl dark:text-slate-400">{title}</h2>
      <comp.metadata dataList={tags.filter((tag) => tag != 'post')} icon={<FontAwesomeIcon icon={faTag} />}></comp.metadata>
      <div className="flex gap-3 text-2xl lg:text-sm mt-3 mb-6">
        <div>
          By <a href={github} className="dark:text-blue-400">{author}</a>
        </div>
        <div>
          Posted <span>{helperDate(date, 'MM/dd/yyyy')}</span>
        </div>
      </div>
      <div className="border-b border-solid border-slate-700"></div>
      <div id="post-content" className=" dark:bg-zinc-900 theme-an-old-hope">
        {children}
      </div>
    </div>
  </>
);