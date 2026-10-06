import { SigninRequest, SigninResponse } from "@/types/auth";

export async function signin(
  payload: SigninRequest,
): Promise<SigninResponse | void> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const csrfRes = await fetch(`${baseUrl}/admin/csrf`, {
    method: "GET",
    credentials: "include",
  });

  if (!csrfRes.ok) {
    throw new Error("CSRFトークンの取得に失敗しました");
  }

  const csrfData = await csrfRes.json();
  const csrfToken = csrfData.token;

  const response = await fetch(`${baseUrl}/admin/auth/signin`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-TOKEN": csrfToken,
    },
    body: JSON.stringify(payload),
  });

  if (response.status === 204) return;

  const result: SigninResponse = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "ログインに失敗しました");
  }

  return result;
}
