import { motion, AnimatePresence } from "framer-motion";

export default function ConfirmDialog({
  open,
  title,
  message,
  onConfirm,
  onCancel,
}: {
  open: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-soft"
          >
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="mt-2 text-sm text-slate-600 ">{message}</p>
            <div className="mt-6 flex justify-end gap-4">
              <button className="btn-outline" onClick={onCancel}>Cancel</button>
              <button className="btn-primary" onClick={onConfirm}>Confirm</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
