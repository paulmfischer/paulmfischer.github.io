export default ({ title, children, comp }: Lume.Data, helpers: Lume.Helpers) => (
  <html className="dark">
    <head>
      <meta charSet="UTF-8"></meta>
      <title>{title}</title>
      <link rel="stylesheet" href="/styles.css"></link>
    </head>
    <body className="prose prose-slate dark:prose-invert dark:text-slate-300 bg-white dark:bg-zinc-800">
      <div className="flex w-screen">
          <div id="sidebar" className="dark:bg-zinc-800 flex flex-col pr-2 fixed inset-0 h-full max-w-64"> 
            <div className="ml-12">
              <comp.profile></comp.profile>
              <comp.nav></comp.nav>
            </div>
            <comp.sidebarFooter></comp.sidebarFooter>
          </div>
          <div className="ml-64 dark:bg-zinc-900 grow container">
            <comp.Header></comp.Header>
            <div id="content" className="m-5 min-h-screen">
              {children}
            </div>
            <comp.footer></comp.footer>
          </div>
      </div>
    </body>
  </html>
);