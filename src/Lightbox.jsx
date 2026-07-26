import { useEffect } from "react";

/* Shared lightbox: click a timeline document to read it large. */
export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [item, onClose]);

  if (!item) return null;
  return (
    <div
      className="j-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Larger document view"
      onClick={onClose}
    >
      <button
        type="button"
        className="j-lightbox-close"
        aria-label="Close larger view"
      >
        ×
      </button>
      <img
        src={item.src}
        alt={item.alt}
        onClick={(e) => e.stopPropagation()}
      />
      {item.caption && <p>{item.caption}</p>}
    </div>
  );
}
