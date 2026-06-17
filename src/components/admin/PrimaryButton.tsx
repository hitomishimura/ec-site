"use client";
import React from "react";
import { Button } from "@mui/material";

type PrimaryButtonProps = {
  onClick: () => void;
  size?: "small" | "medium" | "large";
  label?: string;
};

export default function SaveButton({
  onClick,
  size = "medium",
  label = "保存",
}: PrimaryButtonProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      size={size}
      sx={{
        whiteSpace: "nowrap",
        boxShadow: "none",
        "&:hover": { boxShadow: "none" },
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
