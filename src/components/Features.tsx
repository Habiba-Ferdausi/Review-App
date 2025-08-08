import { BiSearch } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { GiSparkles } from "react-icons/gi";


const items = [
  { icon: FaStar, title: "Honest ratings", desc: "Simple 1–5 stars with short feedback." },
  { icon: BiSearch, title: "Fast discovery", desc: "Search and sort to find the best stores." },
  { icon: BsShieldCheck, title: "Private by default", desc: "Data stays in your browser via localStorage." },
  { icon: GiSparkles, title: "Polished UX", desc: "Clean UI with subtle animations." },
];

export default function Features() {
  return (
    <section className="container-app lg:py-10 py-7">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="card p-5">
            <Icon className="h-5 w-5 text-yellow-400" />
            <h3 className="mt-2 font-semibold text-base">{title}</h3>
            <p className="text-sm text-slate-600 ">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
