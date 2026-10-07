"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import InputField from "@/components/admin/InputField";
import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";
import PrimaryButton from "@/components/admin/PrimaryButton";
import TextLink from "@/components/common/TextLink";
import RangeInputField from "@/components/admin/RangeInputField";
import MultiSelectChipField from "@/components/admin/MultiSelectChipField";
import type { Option } from "@/components/admin/MultiSelectChipField";
import CategoryChip from "@/components/admin/CategoryChip";
import {
  Box,
  Typography,
  Paper,
  Button,
  Pagination,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  TableBody,
} from "@mui/material";
import { useCurrentAdmin } from "@/hooks/admin/useCurrentAdmin";
import { useProducts } from "@/hooks/admin/useProducts";
import { useCategories } from "@/hooks/admin/useCategories";
import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_SIZE,
  DEFAULT_SORT,
  DEFAULT_DIRECTION,
} from "@/constants/pagination";
import type { ProductRequest, SortField, SortDirection } from "@/types/product";

export default function AdminTopPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { admin, loading: adminLoading, error: adminError } = useCurrentAdmin();

  useEffect(() => {
    if (!adminLoading && !admin) {
      router.replace("/admin/signin");
    }
  }, [adminLoading, admin, router]);

  const params = useMemo<ProductRequest>(() => {
    const page = Number(searchParams.get("page") ?? DEFAULT_PAGE);
    const size = Number(searchParams.get("size") ?? DEFAULT_PAGE_SIZE);
    const sort = (searchParams.get("sort") as SortField | null) ?? DEFAULT_SORT;
    const direction =
      (searchParams.get("direction") as SortDirection | null) ??
      DEFAULT_DIRECTION;

    return {
      page,
      size,
      sort,
      direction,
    };
  }, [searchParams]);

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");

  const { categories, loading: categoriesLoading } = useCategories();
  const { products, page: currentPage, totalPages } = useProducts(params);

  const handlePageChange = (_: unknown, nextPage: number) => {
    const next = new URLSearchParams(searchParams.toString());

    next.set("page", String(nextPage));
    next.set("size", String(params.size));
    next.set("sort", params.sort ?? DEFAULT_SORT);
    next.set("direction", params.direction ?? DEFAULT_DIRECTION);

    router.replace(`/admin?${next.toString()}`, { scroll: false });
  };

  const handleSortChange = (field: SortField) => {
    const next = new URLSearchParams(searchParams.toString());
    next.set("page", String(DEFAULT_PAGE));
    next.set("size", String(params.size));

    if (params.sort !== field) {
      next.set("sort", field);
      next.set("direction", "asc");
    } else if (params.direction === "asc") {
      next.set("sort", field);
      next.set("direction", "desc");
    } else {
      next.set("sort", DEFAULT_SORT);
      next.set("direction", DEFAULT_DIRECTION);
    }

    router.replace(`/admin?${next.toString()}`, { scroll: false });
  };

  const handleSearch = () => {
    console.log("click search");
  };

  const handleClear = () => {
    setProductName("");
    setPrice("");
    setContent("");
  };

  const handleRegister = () => {
    console.log("click register");
  };

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [selectedCategories, setSelectedCategories] = useState<Option[]>([]);

  if (categoriesLoading) {
    return <Typography>カテゴリ読込中...</Typography>;
  }

  const mockCategories = [
    {
      slug: "cate-A-01",
      name: "カテゴリーA",
      createdAt: "2026-10-02T01:28:02Z",
    },
    {
      slug: "cate-B-01",
      name: "カテゴリーB",
      createdAt: "2026-10-02T01:28:02Z",
    },
    {
      slug: "cate-C-01",
      name: "カテゴリーC ",
      createdAt: "2026-10-02T01:28:02Z",
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <Box sx={{ display: "flex", flex: "column", overflow: "auto" }}>
        <Sidebar />

        {/* トップページ */}
        <Box
          sx={{
            flex: 1,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            overflowY: "auto",
            minWidth: "924px",
          }}
        >
          <Typography variant="h4" sx={{ mb: 4 }}>
            管理者トップページ
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            商品検索
          </Typography>
          <Paper
            elevation={0}
            sx={{
              display: "inline-block",
              p: 3,
              width: "100%",
              backgroundColor: "#F6F6F6",
              mb: 4,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "flex-end", gap: 3 }}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <InputField
                  key="productName"
                  value={productName}
                  label="商品名"
                  type="text"
                  size="small"
                  placeholder="商品名を入力"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setProductName(e.target.value)
                  }
                />
                <RangeInputField
                  label="価格"
                  minValue={minPrice}
                  maxValue={maxPrice}
                  onMinChange={setMinPrice}
                  onMaxChange={setMaxPrice}
                  minPlaceholder="0"
                  maxPlaceholder="999,999"
                />
                <MultiSelectChipField
                  label="カテゴリー"
                  options={mockCategories}
                  value={selectedCategories}
                  onChange={setSelectedCategories}
                  placeholder="カテゴリーを選択"
                />
              </Box>

              <Box sx={{ display: "flex", marginLeft: "auto" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    mr: 2,
                    whiteSpace: "nowrap",
                    backgroundColor: "white",
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                  onClick={handleClear}
                >
                  クリア
                </Button>
                <PrimaryButton onClick={handleSearch} label="検索" />
              </Box>
            </Box>
          </Paper>

          <Box
            sx={{ display: "flex", alignItems: "center", width: "100%", mb: 2 }}
          >
            <Typography variant="h6">商品一覧</Typography>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                mr: 2,
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
                display: "flex",
                marginLeft: "auto",
              }}
              onClick={handleRegister}
            >
              + 新規登録
            </Button>
          </Box>

          <Box sx={{ width: "100%", mb: 4 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell sx={{ color: "primary.main" }}>商品名</TableCell>
                  <TableCell sx={{ color: "primary.main" }}>
                    <TableSortLabel
                      active={params.sort === "price"}
                      direction={params.direction}
                      hideSortIcon={false}
                      sx={{
                        "& .MuiTableSortLabel-icon": { opacity: 0.4 },
                        "&.Mui-active .MuiTableSortLabel-icon": {
                          opacity: 1,
                        },
                      }}
                      onClick={() => handleSortChange("price")}
                    >
                      価格
                    </TableSortLabel>
                  </TableCell>
                  <TableCell sx={{ color: "primary.main" }}>カテゴリ</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.sku}>
                    <TableCell>
                      {" "}
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={60}
                        height={80}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontSize: 16 }}>
                        <TextLink href={`/admin/products/${product.sku}`}>
                          {product.name}
                        </TextLink>
                      </Typography>
                    </TableCell>
                    <TableCell>¥{product.price.toLocaleString()}</TableCell>
                    <TableCell>
                      {product.categories.length > 0 ? (
                        <Typography
                          variant="body2"
                          color="textDisabled"
                          sx={{
                            flex: 4,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          カテゴリーなし
                        </Typography>
                      ) : (
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                          {product.categories.map((category) => (
                            <CategoryChip
                              key={category.slug}
                              label={category.name}
                            />
                          ))}
                        </Box>
                      )}
                      <Typography
                        variant="body2"
                        color="textDisabled"
                        sx={{
                          flex: 4,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {product.categories.length > 0
                          ? "カテゴリーあり"
                          : "カテゴリーなし"}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>

          <Pagination
            count={totalPages}
            page={currentPage}
            color="primary"
            size="large"
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              mb: 4,
            }}
            onChange={handlePageChange}
          />
        </Box>
      </Box>
    </Box>
  );
}
