"use client";

import React, { useState } from "react";
import Image from "next/image";
import InputField from "@/components/admin/InputField";
import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";
import { Box, Typography, Paper, Button, Divider } from "@mui/material";

export default function AdminTopPage() {
  const products = [
    {
      id: 1,
      image: "/images/Image.png",
      name: "商品名A",
      price: 1000,
      description:
        "サンプル商品Aの説明テキストテキストテキストテキストテキスト",
    },
    {
      id: 2,
      image: "/images/Image.png",
      name: "商品名B",
      price: 800,
      description:
        "サンプル商品Aの説明テキストテキストテキストテキストテキスト",
    },
    {
      id: 3,
      image: "/images/Image.png",
      name: "商品名C",
      price: 3000,
      description:
        "サンプル商品Aの説明テキストテキストテキストテキストテキスト",
    },
    {
      id: 4,
      image: "/images/Image.png",
      name: "商品名D",
      price: 16000,
      description:
        "サンプル商品Aの説明テキストテキストテキストテキストテキスト",
    },
    {
      id: 5,
      image: "/images/Image.png",
      name: "商品名E",
      price: 700,
      description:
        "サンプル商品Aの説明テキストテキストテキストテキストテキスト",
    },
  ];
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleClear = () => {
    setProductName("");
    setPrice("");
    setDescription("");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <Box sx={{ display: "flex", flex: 1 }}>
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
                  value={productName}
                  label="商品名"
                  type="text"
                  size="small"
                  placeholder="商品名を入力"
                  onChange={(e) => setProductName(e.target.value)}
                />
                <InputField
                  value={price}
                  label="価格"
                  type="number"
                  size="small"
                  placeholder="価格を入力"
                  onChange={(e) => setPrice(e.target.value)}
                />
                <InputField
                  value={description}
                  label="説明"
                  type="search"
                  size="small"
                  placeholder="キーワードを入力"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Box>
              <Box sx={{ display: "flex", marginLeft: "auto", mb: 1 }}>
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
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    whiteSpace: "nowrap",
                    boxShadow: "none",
                    "&:hover": { boxShadow: "none" },
                  }}
                >
                  検索
                </Button>
              </Box>
              {/* <FormActionButtons mb={1} /> */}
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
            >
              + 新規登録
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            {products.map((product, index) => (
              <React.Fragment key={product.id}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    my: 1,
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={60}
                    height={80}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      width: "100%",
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ flex: 2 }}>
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ flex: 1, textAlign: "right" }}
                    >
                      ¥{product.price.toLocaleString()}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        flex: 4,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {product.description}
                    </Typography>
                  </Box>
                </Box>
                {index < products.length - 1 && <Divider sx={{ my: 1 }} />}
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
