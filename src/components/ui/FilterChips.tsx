import type { RatingFilter } from "../../types";

export default function FilterChips({
  value,
  onChange,
}: {
  value: RatingFilter;
  onChange: (v: RatingFilter) => void;
}) {
  const chips: { label: string; val: RatingFilter }[] = [
    { label: "All", val: 0 },
    { label: "5★", val: 5 },
    { label: "4★", val: 4 },
    { label: "3★", val: 3 },
    { label: "2★", val: 2 },
    { label: "1★", val: 1 },
  ];
  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((c) => (
        <button
          key={c.val}
          onClick={() => onChange(c.val)}
          className={`chip ${value === c.val ? "bg-slate-100 " : ""}`}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
