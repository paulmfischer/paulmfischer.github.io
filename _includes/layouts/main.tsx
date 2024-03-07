export default ({ title, children, comp }: Lume.Data, helpers: Lume.Helpers) => (
  <html className="dark">
    <head>
      <meta charSet="UTF-8"></meta>
      <title>{title}</title>
      <link rel="stylesheet" href="/styles.css"></link>
    </head>
    <body className="dark:text-slate-300 bg-white dark:bg-zinc-800">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="min-h-screen flex">
          <div id="sidebar" className="hidden lg:flex flex-col fixed inset-0 h-full max-w-64 dark:bg-zinc-800"> 
            <div className="ml-12">
              <comp.profile></comp.profile>
              <comp.nav></comp.nav>
            </div>
            <comp.sidebarFooter></comp.sidebarFooter>
          </div>
          <div className="max-w-full grow flex flex-col lg:pl-56 dark:bg-zinc-900">
            <comp.Header></comp.Header>
            <div id="content" className="ml-10 m-5 mr-12">
              {children}
            </div>
            <div className="mt-auto">
              <comp.footer></comp.footer>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
);