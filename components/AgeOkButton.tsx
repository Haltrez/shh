"use client";

export function AgeOkButton({ label, storageKey }: { label: string; storageKey: string }) {
  return (
    <button
      type="button"
      className="btn btn-ghost"
      onClick={() => {
        try {
          localStorage.setItem(storageKey, "1");
        } catch {}
        document.documentElement.classList.add("age-ok");
      }}
    >
      {label}
    </button>
  );
}
