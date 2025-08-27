"use client";

import { Button, Box, Typography } from "@mui/material";
import InputField from "@/components/admin/InputField";

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
        <InputField
          label="メールアドレス"
          type="email"
          placeholder="email@example.net"
        />
        <InputField
          label="パスワード"
          type="password"
          placeholder="Password"
          mt="24px"
        />
        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{
            mt: 12,
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
