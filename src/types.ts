export type Review = {
  id: string;
  shopName: string;
  text: string;
  rating: number; 
  createdAt: string; 
  updatedAt?: string; 
};
export type RatingFilter = 0 | 1 | 2 | 3 | 4 | 5;
