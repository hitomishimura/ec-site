import { ProductResponse, ProductRequest } from "@/types/product";

export async function getProducts(
  params: ProductRequest,
): Promise<ProductResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const queryParams = new URLSearchParams();

  if (params.keyword) queryParams.set("keyword", params.keyword);
  if (params.minPrice !== undefined)
    queryParams.set("minPrice", String(params.minPrice));
  if (params.maxPrice !== undefined)
    queryParams.set("maxPrice", String(params.maxPrice));
  if (params.page !== undefined) queryParams.set("page", String(params.page));
  if (params.size !== undefined) queryParams.set("size", String(params.size));
  if (params.sort) queryParams.set("sort", params.sort);
  if (params.direction) queryParams.set("direction", params.direction);
  params.categorySlugs?.forEach((slug) =>
    queryParams.append("categorySligs", slug),
  );

  const query = queryParams.toString();
  const url = `${baseUrl}/admin/products${query ? `?${query}` : ""}`;

  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status === 401) {
    const err = new Error("Unauthorized");
    err.name = "Unauthorized";
    throw err;
  }
  if (!response.ok) throw new Error("商品一覧の取得に失敗しました。");

  const result = await response.json();
  return result;
}
