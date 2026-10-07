import { useCallback, useEffect, useState } from "react";
import { getProducts } from "@/api/products";
import type { Product, ProductRequest } from "@/types/product";

export function useProducts(params: ProductRequest = {}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(params.page ?? 1);
  const [size, setSize] = useState<number>(params.size ?? 20);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [unfilteredCount, setUnfilteredCount] = useState<number>(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await getProducts(params);
      setProducts(response.products);
      setPage(response.page);
      setSize(response.size);
      setTotalCount(response.totalCount);
      setTotalPages(response.totalPages);
      setUnfilteredCount(response.unfilteredCount);
    } catch (e) {
      setError(e instanceof Error ? e.message : "商品一覧の取得に失敗しました");
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    void fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    page,
    size,
    totalCount,
    totalPages,
    unfilteredCount,
    loading,
    error,
    refresh: fetchProducts,
  };
}
