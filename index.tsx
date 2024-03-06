import { FontAwesomeIcon } from 'npm:@fortawesome/react-fontawesome';
import { faTag, faList, faCalendar } from 'npm:@fortawesome/free-solid-svg-icons';

function ListMetadata({ dataList, icon }: { dataList: string[] | null | undefined, icon: ReactNode}) {
  if (dataList && dataList.length > 0) {
    return (
      <div className="flex items-center mr-5">
        <div className="w-3 h-3 mr-2">{icon}</div>
        {dataList.join(', ')}
      </div>
    );
  }

  return null;
}

export default ({ search }: Lume.Data, helpers: Lume.Helpers) => {
  return (
    <ul className="pl-0">
      {search.pages('post').map((post) => (
        <li key={post.title} className="list-none pb-5 border-b border-solid border-slate-700">
          {/* <h4 className="mt-7 dark:text-slate-400">{post.title}</h4> */}
          <a className="mt-7 dark:text-slate-400 text-lg" href={post.url}>{post.title}</a>
          {post.description && <div className="text-sm">{post.description}</div>}
          <div className="flex italic text-sm mt-3">
            <div className="flex items-center mr-5">
              <div className="w-3 h-3 mr-2">
                <FontAwesomeIcon icon={faCalendar} />
              </div>
              {helpers.date(post.date, 'MM/dd/yyyy')}
            </div>
            <ListMetadata dataList={post.tags} icon={<FontAwesomeIcon icon={faTag} />} />
            <ListMetadata dataList={post.categories} icon={<FontAwesomeIcon icon={faList} />} />
          </div>
        </li>
      ))}
    </ul>
  );
};