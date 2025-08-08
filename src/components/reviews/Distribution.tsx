import { FaStar } from "react-icons/fa";
import type { Review } from "../../types";

export default function Distribution({ items }: { items: Review[] }) {
  const counts = [1,2,3,4,5].map(k => items.filter(i => i.rating === k).length);
  const max = Math.max(1, ...counts);
  return (
    <div className="card p-5">
      <h3 className="font-semibold mb-3">Ratings distribution</h3>
      <div className="space-y-2 my-2">
        {[5,4,3,2,1].map(stars => {
          const c = counts[stars-1];
          const pct = Math.round((c / max) * 100);
          return (
            <div key={stars} className="flex items-center gap-3">
              <div className="w-10 gap-1 text-sm flex  items-center font-semibold">{stars} <span className="text-yellow-400 "><FaStar /></span></div>
              <div className="flex-1 h-2 rounded-full bg-slate-200  overflow-hidden">
                <div className="h-2 bg-primary" style={{ width: `${pct}%` }} />
              </div>
              <div className="w-8 text-xs text-right">{c}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
