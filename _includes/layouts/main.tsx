export default ({ title, children, comp }: Lume.Data, helpers: Lume.Helpers) => (
  <html className="dark">
    <head>
      <meta charSet="UTF-8"></meta>
      <title>{title}</title>
      <link rel="stylesheet" href="/styles.css"></link>
    </head>
    <body className="prose prose-slate prose-lg dark:text-slate-300 bg-white dark:bg-zinc-800">
      <div className="flex w-screen">
          <div id="sidebar" className="dark:bg-zinc-800 max-w-64 h-screen flex flex-col pr-2"> 
            <div className="ml-12">
              <comp.profile></comp.profile>
              <comp.nav></comp.nav>
            </div>
            <comp.sidebarFooter></comp.sidebarFooter>
          </div>
          <div className="flex-auto">
            {/* <div id="header" className="dark:bg-zinc-700 p-2">
              <comp.Header></comp.Header>
            </div> */}
            <div id="content" className="dark:bg-zinc-900 h-screen p-2">
              {children}
            </div>
          </div>
      </div>
    </body>
  </html>
);