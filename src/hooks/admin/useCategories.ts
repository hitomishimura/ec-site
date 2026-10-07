import { useCallback, useEffect, useState } from "react";
import { getCategories } from "@/api/categories";
import type { Category } from "@/types/category";

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const data = await getCategories();
      setCategories(data);
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "カテゴリ一覧の取得に失敗しました",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchCategories();
  }, [fetchCategories]);

  return {
    categories,
    loading,
    error,
    refresh: fetchCategories,
  };
}
