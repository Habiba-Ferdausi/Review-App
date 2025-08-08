import { HiMiniInbox } from "react-icons/hi2";


export default function EmptyState() {
  return (
    <div className="card p-10 text-center">
      <div className="mx-auto mb-3 size-12 rounded-full bg-slate-100  flex items-center justify-center">
        <HiMiniInbox className="h-6 w-6 text-slate-600 dark:text-slate-300" />
      </div>
      <p className="font-semibold">No reviews yet</p>
      <p className="text-sm text-slate-600 dark:text-slate-400">Be the first to share your online shopping experience.</p>
      <a href="#review-form" className="btn-primary mt-4 inline-flex">Add a Review</a>
    </div>
  );
}
