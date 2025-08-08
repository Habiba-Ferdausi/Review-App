import { CgClose } from "react-icons/cg";
import type { Review } from "../../types";
import ReviewForm from "../reviews/ReviewForm";


export default function EditReviewDialog({
  open,
  initial,
  onClose,
  onSave,
}: {
  open: boolean;
  initial: Review | null;
  onClose: () => void;
  onSave: (rv: Review) => void;
}) {
  if (!open || !initial) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden="true" />
      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        className="absolute left-1/2 top-1/2 w-[95vw] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-5 shadow-xl"
      >
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Edit Review</h2>
          <button className="btn-outline hover:text-primary" onClick={onClose}><CgClose/></button>
        </div>

     
        <ReviewForm
          initial={initial}
          onCreate={() => {}}
          onUpdate={(rv) => {
            onSave(rv);  
            onClose();  
          }}
          onCancel={onClose}
        />
      </div>
    </div>
  );
}
