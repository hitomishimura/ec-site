"use client";

import React, { useState } from "react";
import Image from "next/image";
import InputField from "@/components/admin/InputField";
import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";
import PrimaryButton from "@/components/admin/PrimaryButton";
import { Box, Typography, Paper, Button, Divider } from "@mui/material";
import { products } from "@/mocks/products";

export default function AdminTopPage() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSearch = () => {
    console.log("click search");
  };

  const handleClear = () => {
    setProductName("");
    setPrice("");
    setDescription("");
  };

  const handleRegister = () => {
    console.log("click register");
  };

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
                <PrimaryButton onClick={handleSearch} label="検索" />
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
              onClick={handleRegister}
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
