"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";
import Breadcrumb from "@/components/admin/Breadcrumb";
import CustomDialog from "@/components/admin/CustomDialog";
import PrimaryButton from "@/components/admin/PrimaryButton";
import {
  Typography,
  Box,
  Paper,
  Grid,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { products, type Product } from "@/mocks/products";

export default function AdminProductsEdit({
  params,
}: {
  params: { product_id: string };
}) {
  const productId = Number(params.product_id);
  const getProductById = (id: number): Product | undefined => {
    return products.find((product) => product.id === Number(id));
  };
  const product = getProductById(productId);

  const Input = styled("input")({
    display: "none",
  });

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [open, setOpen] = useState(false); // 確認ダイアログ

  useEffect(() => {
    if (product) {
      setForm({
        name: product.name,
        price: product.price.toString(),
        description: product.description,
        image: product.image,
      });
      if (product.image) {
        setPreviewUrl(product.image);
        setSelectedFile(null);
        const fileName = product.image.split("/").pop() || "";
        setDisplayName(fileName);
      }
    }
  }, [product]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setError("");

    if (file) {
      // ファイル形式のチェック
      const validTypes = ["image/png", "image/jpeg", "image/jpg"];
      if (!validTypes.includes(file.type)) {
        setError("PNG、JPEG、jpg形式の画像のみアップロード可能です。");
        return;
      }

      // ファイルサイズのチェック
      if (file.size > 10 * 1024 * 1024) {
        setError("ファイルサイズは10MB以下にしてください。");
        return;
      }

      setSelectedFile(file);
      setDisplayName(file.name);

      // プレビューURLを作成
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectFileClear = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setError("");
  };

  const handleSave = () => {
    console.log("click save");
    setOpen(false);
  };
  const handleClear = () => {
    setForm({
      name: "",
      price: "",
      description: "",
      image: "",
    });
    handleSelectFileClear();
  };

  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

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
              { label: "編集" },
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
            <Typography>基本情報（編集）</Typography>
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
                  <TextField
                    value={form.name}
                    fullWidth
                    size="small"
                    placeholder="商品名を入力"
                    sx={{ width: "400px" }}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
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
                  {/* previewUrlがない場合にアップロードボタンを表示 */}
                  {!previewUrl && (
                    <label htmlFor="icon-button-file">
                      <Input
                        accept="image/png, image/jpeg, image/jpg"
                        id="icon-button-file"
                        type="file"
                        onChange={handleFileSelect}
                        sx={{ display: "none" }}
                      />
                      <Button
                        variant="outlined"
                        component="span"
                        sx={{ textTransform: "none" }}
                      >
                        ＋ファイルをアップロード
                      </Button>
                    </label>
                  )}
                  {/* エラーメッセージ */}
                  {error && <Typography color="error">{error}</Typography>}
                  {/* プレビュー */}
                  {previewUrl && (
                    <Box>
                      <Box
                        component="img"
                        src={previewUrl}
                        alt="プレビュー"
                        sx={{
                          width: 100,
                          height: "auto",
                          border: "1px solid #D9D9D9",
                          mb: 1,
                          display: "block",
                        }}
                      />
                      {/* {selectedFile && ( */}
                      <Paper
                        elevation={0}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          backgroundColor: "#F6F6F6",
                          border: "1px solid #D9D9D9",
                          borderRadius: "0",
                          p: "2px 10px",
                          maxWidth: "300px",
                        }}
                      >
                        <AttachFileIcon sx={{ color: "#666" }} />
                        <Typography
                          variant="body2"
                          sx={{
                            flexGrow: 1,
                            color: "#333",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            fontSize: "14px",
                          }}
                        >
                          {displayName}
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={handleSelectFileClear}
                          sx={{ color: "#999" }}
                        >
                          <CloseIcon fontSize="small" />
                        </IconButton>
                      </Paper>
                      {/* )} */}
                    </Box>
                  )}
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
                  <TextField
                    value={form.price}
                    fullWidth
                    size="small"
                    placeholder="価格を入力"
                    sx={{ width: "400px", mr: 2 }}
                    onChange={(e) =>
                      setForm({ ...form, price: e.target.value })
                    }
                  />
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
                  <TextField
                    value={form.description}
                    multiline
                    rows={5}
                    fullWidth
                    placeholder="説明文を入力"
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                  />
                </Box>
              </Grid>
            </Grid>
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
            <PrimaryButton onClick={openDialog} />
          </Box>
          <CustomDialog
            isOpen={open}
            title={"入力された編集内容で保存しますか？"}
            btnName={"保存"}
            onClose={closeDialog}
            onClick={handleSave}
          />
        </Box>
      </Box>
    </Box>
  );
}
