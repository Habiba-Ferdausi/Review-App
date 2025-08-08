
import FilterChips from "../ui/FilterChips";
import type { RatingFilter } from "../../types";

export default function Toolbar({
  query,
  onQuery,
  filter,
  onFilter,
  sort,
  onSort,

}: {
  query: string;
  onQuery: (v: string) => void;
  filter: RatingFilter ;
  onFilter: (v: RatingFilter) => void;
  sort: "newest" | "oldest" | "rating-desc" | "rating-asc";
  onSort: (v: "newest" | "oldest" | "rating-desc" | "rating-asc") => void;

}) {
  return (
    <div className="card p-6">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 lg:flex-row items-center justify-between">
          <div className="relative w-full lg:w-[340px]">
      <input
        value={query}
        onChange={(e) => onQuery(e.target.value)}
        placeholder="Search by shop name..."
        className="input pl-9"
      />
    </div>
          <div className="flex items-center gap-2">
            <label className="label font-medium text-base mt-2">Sort:</label>
            <select value={sort} onChange={(e) => onSort(e.target.value as any)} className="input">
              <option value="newest">Newest </option>
              <option value="oldest">Oldest</option>
              <option value="rating-desc">Highest rating</option>
              <option value="rating-asc">Lowest rating</option>
            </select>
          
          </div>
        </div>
        <div className="flex items-center justify-between flex-wrap gap-3">
          <label className="label ms-2 font-semibold text-primary text-base">Filter by rating</label>
          <FilterChips value={filter} onChange={onFilter} />
        </div>
      </div>
    </div>
  );
}
