"use client";

import { AppBar, Box, Toolbar, Typography, Link } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import NextLink from "next/link";

export default function Header() {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar disableGutters>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontSize: "24px", fontWeight: "bold", ml: 8 }}
          >
            管理者ログイン
          </Typography>
          <Typography sx={{ fontSize: "18px", fontWeight: "bold", mr: 3 }}>
            管理者名：サンプル 太郎
          </Typography>
          <Link
            component={NextLink}
            href="###"
            underline="none"
            color="inherit"
            sx={{ display: "flex", alignItems: "center", mr: 2 }}
          >
            <LogoutIcon />
            <Typography>ログアウト</Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
