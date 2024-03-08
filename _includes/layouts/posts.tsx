export const layout = "layouts/main.tsx";

export default ({ title, children, github, author, date }: Lume.Data, helpers: Lume.Helpers) => (
  <>
    <div className="">
      <h2 className="mt-4 mb-3 text-6xl lg:text-3xl dark:text-slate-400">{title}</h2>
      <div className="flex gap-3 text-2xl lg:text-sm mb-6">
        <div>
          By <a href={github} className="dark:text-slate-400">{author}</a>
        </div>
        <div>
          Posted <span>{helpers.date(date, 'MM/dd/yyyy')}</span>
        </div>
      </div>
      <div id="post-content" data-pagefind-body className="text-3xl lg:text-lg dark:bg-zinc-900 theme-an-old-hope">
        {children}
      </div>
    </div>
  </>
);