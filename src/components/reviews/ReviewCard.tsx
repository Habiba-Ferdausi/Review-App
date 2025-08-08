import { useState } from "react";
import { motion } from "framer-motion";

import StarRating from "./StarRating";
import type { Review } from "../../types";
import { formatDate } from "../../utils";
import ConfirmDialog from "../ui/ConfirmDialog";
import { BiPencil, BiTrash } from "react-icons/bi";
import { LuCalendarClock } from "react-icons/lu";

export default function ReviewCard({
  item,
  onEdit,
  onDelete,
}: {
  item: Review;
  onEdit: (r: Review) => void;
  onDelete: (id: string) => void;
}) {
  const [confirm, setConfirm] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="card p-5"
    >
      <div className="flex items-start justify-between gap-4">
        <div >
          <h3 className="truncate text-lg font-bold">{item.shopName}</h3>
          <div className="mt-1 flex items-center gap-2">
            <StarRating value={item.rating} readOnly size={13}  />
            <span className="text-xs text-slate-500">{item.rating}/5</span>
          </div>
        </div>
        <div className="flex gap-1">
          <button
            className="btn-outline"
            onClick={() => onEdit(item)}
            title="Edit"
          >
            <BiPencil className="text-xl mr-1 text-primary" />
          </button>
          <button
            className="btn-outline"
            onClick={() => setConfirm(true)}
            title="Delete"
          >
            <BiTrash className="text-xl mr-1 text-red-600" /> 
          </button>
        </div>
      </div>
      <p className="mt-3 text-sm text-slate-800 mb-2 whitespace-pre-wrap">{item.text}</p>

      <div className="mt-4 flex items-center gap-1 text-xs text-slate-500">
        <LuCalendarClock className="h-4 w-4 text-primary" />
        <span className="font-medium">Created: {formatDate(item.createdAt)}</span>
        {item.updatedAt && <span className="ml-3 text-green-400 font-medium">Updated: {formatDate(item.updatedAt)}</span>}
      </div>

      <ConfirmDialog
        open={confirm}
        title="Delete review?"
        message="This action cannot be undone."
        onCancel={() => setConfirm(false)}
        onConfirm={() => {
          setConfirm(false);
          onDelete(item.id);
        }}
      />
    </motion.div>
  );
}
