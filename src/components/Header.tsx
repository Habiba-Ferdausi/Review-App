export default function Header() {
  return (
    <header className="bg-primary text-white shadow-sm">
      <div className="container-app py-4 flex items-center justify-between">
       
        <div className="flex items-center lg:gap-3 gap-2">
          <div className="lg:h-10 h-8 lg:w-10 w-8 rounded-xl bg-white/70 flex items-center justify-center font-extrabold  ">
           <img src="/review.svg" alt=""  />
          </div>
          <div className="leading-tight">
            <p className="font-extrabold tracking-tight lg:text-lg text-base">
              Online Shop Reviews
            </p>
          
          </div>
        </div>

        
        <div>
          <a
            href="#review-form"
            className="btn-secondary border-white  text-white hover:bg-white hover:text-primary"
          >
            Add a Review
          </a>
        </div>
      </div>
    </header>
  );
}
