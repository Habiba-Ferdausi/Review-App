import { useMemo, useState } from "react";
import type { RatingFilter, Review } from "./types";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Header from "./components/Header";
import Features from "./components/Features";
import Toolbar from "./components/reviews/Toolbar";
import ReviewForm from "./components/reviews/ReviewForm";
import ReviewList from "./components/reviews/ReviewList";
import Leaderboard from "./components/ui/Leaderboard";
import Distribution from "./components/Distribution";
import HeroSection from "./components/Herosection";
import Footer from "./components/Footer";


const STORAGE_KEY = "userReview";

export default function App() {
  const [reviews, setReviews] = useLocalStorage<Review[]>(STORAGE_KEY, []);
  const [editing, setEditing] = useState<Review | null>(null);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"newest" | "oldest" | "rating-desc" | "rating-asc">("newest");
  const [ratingFilter, setRatingFilter] = useState<RatingFilter>(0);

  const filtered = useMemo(() => {
    let r = reviews
      .filter((rv) => rv.shopName.toLowerCase().includes(query.trim().toLowerCase()))
      .filter((rv) => (ratingFilter === 0 ? true : rv.rating === ratingFilter));

    switch (sort) {
      case "newest":
        r = [...r].sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
        break;
      case "oldest":
        r = [...r].sort((a, b) => +new Date(a.createdAt) - +new Date(b.createdAt));
        break;
      case "rating-desc":
        r = [...r].sort((a, b) => b.rating - a.rating);
        break;
      case "rating-asc":
        r = [...r].sort((a, b) => a.rating - b.rating);
        break;
    }
    return r;
  }, [reviews, query, sort, ratingFilter]);

  const handleCreate = (rv: Review) => setReviews((prev) => [rv, ...prev]);
  const handleUpdate = (rv: Review) => {
    setReviews((prev) => prev.map((p) => (p.id === rv.id ? rv : p)));
    setEditing(null);
  };
  const handleDelete = (id: string) => setReviews((prev) => prev.filter((p) => p.id !== id));


  return (
    <div>
      <Header />
      <HeroSection/>
      <Features />

      <section id="review-form" className="container-app py-10 space-y-4">
        <div className="card p-4 sm:p-6">
          <h2 className="text-xl font-bold">Add a Review</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">Share your experience and help the community.</p>
          <div className="mt-4">
            <ReviewForm
              key={editing ? editing.id : "create"}
              initial={editing || undefined}
              onCreate={handleCreate}
              onUpdate={handleUpdate}
              onCancel={() => setEditing(null)}
            />
          </div>
        </div>
      </section>

      <section id="#leaderboard" className="container-app space-y-4">
        <Toolbar
          query={query}
          onQuery={setQuery}
          filter={ratingFilter}
          onFilter={setRatingFilter}
          sort={sort}
          onSort={setSort}
      
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pb-9 ">
          <div className="lg:col-span-2">
            <ReviewList items={filtered} onEdit={setEditing} onDelete={handleDelete} />
          </div>
          <div className="space-y-4">
            <Leaderboard items={reviews} />
            <Distribution items={reviews} />
          </div>
        </div>
      </section>

<Footer/>
 
    </div>
  );
}
