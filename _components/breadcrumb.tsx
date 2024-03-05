function BreadCrumbItem({ item }) {
  if (item.data) {
    return <a href={item.data.url}>{item.data.title}</a>;
  } else {
    return <span>{item.slug}</span>
  }
}

export default (data: Lume.Data, helpers: Lume.Helpers) => {
  return <>
    <ul>
      {data.nav.breadcrumb().map(item => (
        <li>
          <BreadCrumbItem item={item} />
        </li>
      ))}
    </ul>
  </>; 
}