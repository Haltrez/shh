import { Fragment } from "react";

/** "A, B and C", each linked when a URL is known. Third-party links are nofollow. */
export function Sources({ sources }: { sources: { name: string; url?: string }[] }) {
  return (
    <>
      {sources.map((s, i) => (
        <Fragment key={s.name}>
          {i > 0 ? (i === sources.length - 1 ? " and " : ", ") : null}
          {s.url ? (
            <a href={s.url} rel="nofollow noopener" target="_blank">{s.name}</a>
          ) : (
            s.name
          )}
        </Fragment>
      ))}
    </>
  );
}
