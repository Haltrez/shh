import type { Block } from "@/content/types";
import { Caveat } from "./Caveat";

export function Steps({ steps }: { steps: { name: string; need: string; text: string }[] }) {
  return (
    <ol className="steps">
      {steps.map((s, i) => (
        <li key={s.name} id={`step-${i + 1}`}>
          <h3>{s.name}</h3>
          <div className="need">what you need: {s.need}</div>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function Blocks({ blocks, h2Seen = false }: { blocks: Block[]; h2Seen?: boolean }) {
  let seen = h2Seen;
  return (
    <>
      {blocks.map((b, i) => {
        if (b.type === "h2") seen = true;
        if (b.type === "steps" && !seen) {
          seen = true;
          return (
            <div key={i}>
              <h2 className="sr-only">Step by step</h2>
              <Steps steps={b.steps} />
            </div>
          );
        }
        switch (b.type) {
          case "p":
            return <p key={i}>{b.text}</p>;
          case "h2":
            return (
              <h2 key={i} id={b.id ?? slugify(b.text)}>
                {b.text}
              </h2>
            );
          case "list": {
            const items = b.items.map((t) => <li key={t}>{t}</li>);
            return b.ordered ? <ol key={i}>{items}</ol> : <ul key={i}>{items}</ul>;
          }
          case "caveat":
            return <Caveat key={i} text={b.text} />;
          case "steps":
            return <Steps key={i} steps={b.steps} />;
          case "table":
            return (
              <div key={i} style={{ marginBottom: "1.5em" }}>
                <div className="table-wrap">
                  <table className="data-table">
                    <thead>
                      <tr>
                        {b.head.map((h, j) => (
                          <th key={j}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {b.rows.map((r, j) => (
                        <tr key={j}>
                          {r.map((cell, k) => (
                            <td key={k}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {b.note ? <p className="table-note">{b.note}</p> : null}
              </div>
            );
        }
      })}
    </>
  );
}
