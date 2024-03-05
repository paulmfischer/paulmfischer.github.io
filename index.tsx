import { TagIcon, RectangleGroupIcon } from 'npm:@heroicons/react/24/solid';

function ListMetadata({ dataList, icon }: { dataList: string[] | null | undefined, icon: ReactNode}) {
  if (dataList && dataList.length > 0) {
    return (
      <div className="flex items-center mr-5">
        <div className="w-4 h-4 mr-2">{icon}</div>
        {/* {dataList.map((data) => <span className="mr-3">{data}</span>)} */}
        {dataList.join(', ')}
      </div>
    );
  }

  return null;
}

export default ({ search }: Lume.Data, helpers: Lume.Helpers) => {
  return (
    <ul>
      {search.pages('post').map((post) => (
        <li key={post.title} className="list-none">
          <h4 className="dark:text-slate-400">{post.title}</h4>
          <div>{post.description}</div>
          <div className="flex italic text-sm mt-3">
            <div className="mr-5">{helpers.date(post.date, 'MM/dd/yyyy')}</div>
            <ListMetadata dataList={post.tags} icon={<TagIcon />} />
            <ListMetadata dataList={post.categories} icon={<RectangleGroupIcon />} />
          </div>
        </li>
      ))}
    </ul>
  );
};