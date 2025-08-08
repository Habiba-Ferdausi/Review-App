
import { motion } from "framer-motion";
import { TiStarFullOutline } from "react-icons/ti";

type Props = {
  value: number;
  onChange?: (v: number) => void;
  size?: number;
  readOnly?: boolean;
};

export default function StarRating({ value, onChange, size = 14, readOnly = false }: Props) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="flex items-center ">
      {stars.map((s) => {
        const active = value >= s;
        return (
          <motion.button
            key={s}
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={() => !readOnly && onChange?.(s)}
            className=" text-lg"
            aria-label={`Set rating ${s}`}
            
          >
            <TiStarFullOutline
             size={20}
              className={active ? "text-yellow-400" : "text-slate-200"}
              width={size}
              height={size}
            />
          </motion.button>
        );
      })}
    </div>
  );
}
