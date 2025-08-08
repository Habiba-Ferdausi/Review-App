import type { Review } from "../../types";

export default function Leaderboard({ items }: { items: Review[] }) {

  const map = new Map<string, { sum: number; count: number }>();
  for (const r of items) {
    const cur = map.get(r.shopName) ?? { sum: 0, count: 0 };
    cur.sum += r.rating;
    cur.count += 1;
    map.set(r.shopName, cur);
  }
  const rows = Array.from(map.entries())
    .map(([name, v]) => ({ name, avg: v.sum / v.count, count: v.count }))
    .sort((a, b) => b.avg - a.avg || b.count - a.count)
    .slice(0, 5);

  return (
    <div id="leaderboard" className="card p-5">
      <h3 className="font-semibold mb-3">Top rated stores</h3>
      {rows.length === 0 ? (
        <p className="text-sm text-slate-600 ">No data yet.</p>
      ) : (
        <ul className="divide-y divide-slate-100 ">
          {rows.map((r, i) => (
            <li key={r.name} className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/20  text-primary flex items-center justify-center font-bold">{i+1}</div>
                <div>
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-xs text-slate-500">{r.count} review{r.count>1?"s":""}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">{r.avg.toFixed(2)} <span className="text-yellow-400">★</span> </p>
                <p className="text-xs text-slate-500">avg rating</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
