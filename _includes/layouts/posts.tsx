export const layout = "layouts/main.tsx";

export default ({ title, children, github, author, date }: Lume.Data, helpers: Lume.Helpers) => (
  <>
    <div className="ml-5">
      <h2 className="dark:text-slate-400 mt-4 mb-3">{title}</h2>
      <div className="flex gap-3 text-sm">
        <div>
          By <a href={github}>{author}</a>
        </div>
        <div>
          Posted <span>{helpers.date(date, 'MM/dd/yyyy')}</span>
        </div>
      </div>
      <div id="post-content" className="dark:bg-zinc-900 p-2 theme-an-old-hope">
        {children}
      </div>
    </div>
  </>
);