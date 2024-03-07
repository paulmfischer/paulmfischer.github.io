export default ({ comp, ...data }: Lume.Data, helpers: Lume.Helpers) => {
  return <>
    <div className="flex pl-5 p-2 dark:bg-zinc-700 justify-end items-center">
      {/* <div> */}
        {/* <ul>
          {data.nav.breadcrumb().map(crumb => (
            <li>
              <a href={crumb.data.url}>{crumb.data.title}</a>
            </li>
          ))}
        </ul> */}
      {/* </div> */}
      <div id="search"></div>
    </div>
  </>; 
}