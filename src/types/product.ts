import type { Category } from "@/types/category";

export type Product = {
  sku: string;
  image: string;
  name: string;
  price: number;
  liked: boolean;
  categories: Category[];
  createdAt: Date;
};

export type ProductResponse = {
  page: number;
  products: Product[];
  size: number;
  totalCount: number;
  totalPages: number;
  unfilteredCount: number;
};

export type SortField = "createdAt" | "price";
export type SortDirection = "asc" | "desc";

export type ProductRequest = {
  keyword?: string;
  categorySlugs?: string[];
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  size?: number;
  sort?: SortField;
  direction?: SortDirection;
};
