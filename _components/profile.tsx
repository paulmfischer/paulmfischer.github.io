export default (data: Lume.Data, helpers: Lume.Helpers) => {
  return (
    <div className="profile-wrapper">
      <div id="avatar" className="mt-12 mb-8">
        <a href="/">
          <img src="/assets/img/avatar-150x150.png" alt="avatar" className="size-44 lg:size-24 rounded-full border-2 border-slate-300" />
        </a>
      </div>
      <h2 className="lg:text-lg lg:text-base mb-5 dark:text-slate-400">{data.siteTitle}</h2>
      <div className="lg:text-base italic mb-12">My thoughts, experiences, and 'fun' issues I encounter on my journey as a developer.</div>
    </div>
  );
};