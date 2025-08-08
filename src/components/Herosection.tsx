import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-transparent ">
      <div className="container-app py-12 ">
        <div className="grid lg:grid-cols-2  gap-8 items-center">
          <div>
            <h1 className="lg:text-5xl text-4xl  font-extrabold ">
              Rate your <span className="text-primary">online shopping</span> experience
            </h1>
            <p className="mt-6 text-sm  text-slate-600 dark:text-slate-300">
              Help others choose better stores by sharing honest reviews — and discover the best places to buy.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#review-form" className="btn-primary">Add a Review</a>
              <a href="#leaderboard" className="btn-secondary">Top Stores</a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative g:block hidden"
          >
            <div className="w-full h-full overflow-hidden">
             <img src="/hero.gif" className="w-[300px] mx-auto h-[300px]"/>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
