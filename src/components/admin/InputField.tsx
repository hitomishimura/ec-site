"use client";

import React from "react";
import { TextField, Box, Typography } from "@mui/material";

type Props = {
  value?: string | number;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder: string;
  mt?: string | number;
  size?: "small" | "medium";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputField({
  value,
  label,
  type = "text",
  placeholder,
  mt = 0,
  size = "medium",
  onChange,
}: Props) {
  return (
    <Box sx={{ mt }}>
      <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
        {label}
      </Typography>
      <TextField
        value={value}
        type={type}
        variant="outlined"
        margin="dense"
        placeholder={placeholder}
        fullWidth
        size={size}
        slotProps={{
          input: type === "number" ? { inputProps: { step: 1 } } : undefined,
        }}
        sx={{
          backgroundColor: "white",
          minWidth: 200,
          ...(type === "number"
            ? {
                "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
                  {
                    WebkitAppearance: "none",
                    margin: 0,
                  },
              }
            : {}),
        }}
        onChange={onChange}
      />
    </Box>
  );
}
