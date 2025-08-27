"use client";

import InputField from "@/components/admin/InputField";
import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";
import { Box, Typography, Paper, Button } from "@mui/material";

export default function AdminTopPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <Box sx={{ display: "flex", flex: 1 }}>
        <Sidebar />

        {/* トップページ */}
        <Box
          sx={{
            flex: 1,
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            overflowY: "auto",
          }}
        >
          <Typography variant="h4" sx={{ mb: 4 }}>
            管理者トップページ
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            商品検索
          </Typography>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              width: "100%",
              maxWidth: 600,
              backgroundColor: "#F6F6F6",
              mb: 3,
            }}
          >
            <Button variant="outlined" color="primary" sx={{ mr: 2 }}>
              クリア
            </Button>
            <Button variant="contained" color="primary">
              検索
            </Button>
          </Paper>

          <Typography variant="h6" sx={{ mb: 3 }}>
            商品一覧
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
