"use client";

import React from "react";
import {
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  btnName?: string;
  btnColor?: "primary" | "error";
  onClick?: () => void;
};

export default function CustomDialog({
  isOpen,
  onClose,
  title = "入力された内容で新規登録をしますか？",
  btnName = "新規登録",
  btnColor = "primary",
  onClick,
}: Props) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: "400px",
            p: 2,
            m: 1,
          },
        },
      }}
    >
      <DialogContent>
        <Typography>{title}</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            mr: 1,
            whiteSpace: "nowrap",
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
          onClick={onClose}
        >
          キャンセル
        </Button>
        <Button
          variant="contained"
          color={btnColor}
          sx={{
            whiteSpace: "nowrap",
            boxShadow: "none",
            "&:hover": { boxShadow: "none" },
          }}
          onClick={onClick}
        >
          {btnName}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
