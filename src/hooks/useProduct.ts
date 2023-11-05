// import useData from "./useData";

import product from "../data/product";
// export interface Genre {
//   id: number;
//   name: string;
// }

export interface Brand {
  id?: number;
  name?: string;
}
export interface Photo {
  id: number;
  productId: number;
  fullPath: string;
}
export interface Inventory {
  amount?: string | null;
}

export interface Option {
  price: number;
  inventory: Inventory;
}
interface Category {
  name: string;
}
export interface Product {
  id: number;
  name: string;

  options: Option[];
  photos: Photo[];
  brand: Brand;
  isActive: boolean;
  description?: string | null;
  primaryCategory: Category;
}

const useProduct = () => ({ products: product });
export default useProduct;

// const useGenres = () => useData<Genre>("/genres")
// export default useGenres;
