"use client";

import { Button, TextField, Container, Box, Typography } from "@mui/material";

export default function AdminLogin() {
  return (
    <Box
      sx={{
        width: "626px",
        margin: "0 auto",
        paddingTop: "180px",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ fontSize: "32px", fontWeight: "bold", margin: "0 auto" }}
      >
        管理者ログイン
      </Typography>
      <Box sx={{ mt: "56px" }}>
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            メールアドレス
          </Typography>
          <TextField
            variant="outlined"
            margin="dense"
            placeholder="email@example.net"
            fullWidth
          />
        </Box>
        <Box sx={{ mt: "24px" }}>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            パスワード
          </Typography>
          <TextField
            type="password"
            variant="outlined"
            margin="dense"
            placeholder="Password"
            fullWidth
          />
        </Box>
        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{
            mt: 10,
            backgroundColor: "black",
            "&:hover": {
              backgroundColor: "#222",
            },
          }}
        >
          {/* フォントサイズ調整中 */}
          <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
            ログイン
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
