"use client";

import React, { useState } from "react";
import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";
import Breadcrumb from "@/components/admin/Breadcrumb";
import CustomDialog from "@/components/admin/CustomDialog";
import { Typography, Box, Paper, Grid, Button } from "@mui/material";
import Image from "next/image";
import { products, type Product } from "@/mocks/products";

export default function AdminProductsDetail({
  params,
}: {
  params: { product_id: string };
}) {
  const productId = Number(params.product_id);
  const getProductById = (id: number): Product | undefined => {
    return products.find((product) => product.id === Number(id));
  };
  const product = getProductById(productId);

  const [open, setOpen] = useState(false); // 確認ダイアログ
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  const handleDelete = () => {
    console.log("click delete");
    setOpen(false);
  };
  const handleEdit = () => {
    console.log("click edit");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <Box sx={{ display: "flex", flex: "column", overflow: "auto" }}>
        <Sidebar />

        {/* 商品新規登録 */}
        <Box
          sx={{
            flex: 1,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            overflowY: "auto",
            minWidth: "800px",
          }}
        >
          <Breadcrumb
            items={[
              { label: "トップページ", href: "/admin" },
              { label: product?.name ?? "" },
            ]}
          />

          <Paper
            elevation={0}
            sx={{
              p: 2,
              width: "100%",
              backgroundColor: "#F6F6F6",
              border: "1px solid #D9D9D9",
              borderRadius: 0,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "auto",
                height: "100%",
              }}
            >
              <Typography>基本情報</Typography>
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
                  onClick={handleEdit}
                >
                  編集
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  sx={{
                    whiteSpace: "nowrap",
                    backgroundColor: "white",
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                  onClick={openDialog}
                >
                  削除
                </Button>
              </Box>
            </Box>
          </Paper>

          <Box
            sx={{
              width: "100%",
              border: "1px solid #D9D9D9",
              mb: 4,
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                width: "100%",
                borderBottom: "1px solid #D9D9D9",
                alignItems: "center",
              }}
            >
              <Grid size={{ xs: 2 }}>
                <Box sx={{ p: 2 }}>
                  <Typography>商品名</Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 10 }} sx={{ borderLeft: "1px solid #D9D9D9" }}>
                <Box sx={{ p: 2 }}>
                  <Typography>{product?.name}</Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{
                borderBottom: "1px solid #D9D9D9",
                alignItems: "center",
              }}
            >
              <Grid size={{ xs: 2 }}>
                <Box sx={{ p: 2 }}>
                  <Typography>商品画像</Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 10 }} sx={{ borderLeft: "1px solid #D9D9D9" }}>
                <Box sx={{ p: 2 }}>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "120px",
                    }}
                  >
                    <Image
                      src={product!.image}
                      alt="productImage"
                      fill
                      style={{
                        objectFit: "contain",
                        objectPosition: "left center",
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{
                borderBottom: "1px solid #D9D9D9",
                alignItems: "center",
              }}
            >
              <Grid size={{ xs: 2 }}>
                <Box sx={{ p: 2 }}>
                  <Typography>価格</Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 10 }} sx={{ borderLeft: "1px solid #D9D9D9" }}>
                <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
                  <Typography>{product?.price}</Typography>
                  <Typography>円</Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{
                alignItems: "center",
              }}
            >
              <Grid size={{ xs: 2 }}>
                <Box sx={{ p: 2 }}>
                  <Typography>説明文</Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 10 }} sx={{ borderLeft: "1px solid #D9D9D9" }}>
                <Box sx={{ p: 2 }}>
                  <Typography>{product?.description}</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <CustomDialog
            isOpen={open}
            title={`${product?.name}を削除しますか？`}
            btnName="削除"
            btnColor="error"
            onClose={closeDialog}
            onClick={handleDelete}
          />
        </Box>
      </Box>
    </Box>
  );
}
