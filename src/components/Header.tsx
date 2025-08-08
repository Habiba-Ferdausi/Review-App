export default function Header() {
  return (
    <header className="bg-primary text-white shadow-sm">
      <div className="container-app py-4 flex items-center justify-between">
       
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-white/70 flex items-center justify-center font-extrabold  ">
           <img src="/review.svg" alt=""  />
          </div>
          <div className="leading-tight">
            <p className="font-extrabold tracking-tight text-lg">
              Online Shop Reviews
            </p>
          
          </div>
        </div>

        
        <div>
          <a
            href="#review-form"
            className="btn-secondary border-white text-white hover:bg-white hover:text-primary"
          >
            Add a Review
          </a>
        </div>
      </div>
    </header>
  );
}
