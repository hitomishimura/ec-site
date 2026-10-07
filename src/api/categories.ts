import type { Category } from "@/types/category";

export async function getCategories(): Promise<Category[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const response = await fetch(`${baseUrl}/admin/categories`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error("カテゴリー一覧の取得に失敗しました");

  const result = await response.json();
  return result;
}
