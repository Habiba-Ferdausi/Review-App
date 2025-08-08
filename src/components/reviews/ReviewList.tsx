import type { Review } from "../../types";
import EmptyState from "../ui/EmptyState";
import ReviewCard from "./ReviewCard";


export default function ReviewList({
  items,
  onEdit,
  onDelete,
}: {
  items: Review[];
  onEdit: (r: Review) => void;
  onDelete: (id: string) => void;
}) {
  if (items.length === 0) return <EmptyState/>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((it) => (
        <ReviewCard key={it.id} item={it} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
