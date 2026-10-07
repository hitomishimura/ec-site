import type { Admin } from "@/types/admin";

export async function getCurrentAdmin(): Promise<Admin> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const response = await fetch(`${baseUrl}/admin/admins/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "管理者情報の取得に失敗しました");
  }

  const result = await response.json();
  return result;
}
