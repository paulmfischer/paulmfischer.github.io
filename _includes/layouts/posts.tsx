export const layout = "layouts/main.tsx";

export default ({ title, children }: Lume.Data, helpers: Lume.Helpers) => (
  <>
    <div className="m-3">
      <h1>{title}</h1>
      <div id="post-content" className="dark:bg-zinc-900 p-2">
        {children}
      </div>
    </div>
  </>
);