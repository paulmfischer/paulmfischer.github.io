import { FontAwesomeIcon } from 'npm:@fortawesome/react-fontawesome';
import { faTag, faList, faCalendar } from 'npm:@fortawesome/free-solid-svg-icons';

function ListMetadata({ dataList, icon }: { dataList: string[] | null | undefined, icon: ReactNode}) {
  if (dataList && dataList.length > 0) {
    return (
      <div className="flex items-center lg:mr-5">
        <div className="w-6 h-6 lg:w-3 lg:h-3 mr-5">{icon}</div>
        {dataList.join(', ')}
      </div>
    );
  }

  return null;
}

export default ({ search }: Lume.Data, helpers: Lume.Helpers) => {
  return (
    <ul className="pl-0 mr-12">
      {search.pages('post').map((post) => (
        <li key={post.title} className="list-none pb-5 mb-8 lg:mb-5 border-b border-solid border-slate-700">
          <a className="py-5 dark:text-slate-400 lg:text-lg" href={post.url}>{post.title}</a>
          {post.description && <div className="my-6 text-3xl lg:my-2 lg:text-sm italic">{post.description}</div>}
          <div className="flex flex-col gap-3 text-2xl lg:flex-row italic lg:text-sm mt-3">
            <div className="flex items-center mr-5">
              <div className="w-6 h-6 lg:w-3 lg:h-3 mr-5">
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