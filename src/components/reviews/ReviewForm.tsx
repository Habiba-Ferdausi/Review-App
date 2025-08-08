import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Review } from "../../types";
import { uid } from "../../utils";
import StarRating from "./StarRating";
import { BiCheck } from "react-icons/bi";


export default function ReviewForm({
  initial,
  onCreate,
  onUpdate,
  onCancel,
}: {
  initial?: Review;
  onCreate: (rv: Review) => void;
  onUpdate: (rv: Review) => void;
  onCancel: () => void;
}) {
  const [shopName, setShopName] = useState(initial?.shopName ?? "");
  const [text, setText] = useState(initial?.text ?? "");
  const [rating, setRating] = useState<number>(initial?.rating ?? 0);
  const [saved, setSaved] = useState<null | "created" | "updated">(null);
  const topRef = useRef<HTMLDivElement | null>(null);

  const valid = useMemo(() => {
    return shopName.trim().length > 0 && text.trim().length >= 4 && rating > 0;
  }, [shopName, text, rating]);

  useEffect(() => {
    if (saved) {
      const t = setTimeout(() => setSaved(null), 1600);
      return () => clearTimeout(t);
    }
  }, [saved]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;

    if (initial) {
      const updated: Review = {
        ...initial,
        shopName: shopName.trim(),
        text: text.trim(),
        rating,
        updatedAt: new Date().toISOString(),
      };
      onUpdate(updated);
      setSaved("updated");
    } else {
      const rv: Review = {
        id: uid(),
        shopName: shopName.trim(),
        text: text.trim(),
        rating,
        createdAt: new Date().toISOString(),
      };
      onCreate(rv);
      setShopName("");
      setText("");
      setRating(0);
      setSaved("created");
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };



  return (
    <div ref={topRef}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="label pb-2">Shop Name</label>
            <input
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              placeholder="e.g. Daraz"
              className={`input ${(shopName.trim().length === 0)}`}
              required
            />
          </div>
          <div>
            <label className="label">Rating</label>
            <div className="flex items-center gap-3 rounded-xl mt-2 border border-slate-100 bg-white  px-3 py-2">
              <StarRating value={rating} onChange={setRating} />
              <span className="text-sm text-slate-600 ms-2 font-medium ">{rating}/5</span>
            </div>
          </div>
        </div>

        <div>
          <label className="label">Review</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share your experience..."
            rows={4}
            className="input min-h-[120px]" 
          />

        </div>

        <div className="flex items-center gap-2">
          <button className="btn-primary" type="submit">
            {initial ? "Update Review" : "Submit Review"}
          </button>
          {initial && (
            <button type="button" onClick={onCancel} className="btn-outline">
              Cancel
            </button>
          )}
          <motion.span
            initial={false}
            animate={{ opacity: saved ? 1 : 0, y: saved ? 0 : -6 }}
            className={`ml-2 inline-flex items-center text-sm ${saved ? "text-green-600" : "text-transparent"}`}
          >
            <BiCheck className="h-4 w-4 mr-1" /> {saved === "created" ? "Review Saved" : saved === "updated" ? " Review Updated" : ""}
          </motion.span>
        </div>
      </form>
    </div>
  );
}
