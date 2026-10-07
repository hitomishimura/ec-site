"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import InputField from "@/components/admin/InputField";

type RangeInputFieldProps = {
  label?: string;
  minValue: string;
  maxValue: string;
  onMinChange: (value: string) => void;
  onMaxChange: (value: string) => void;
  minPlaceholder?: string;
  maxPlaceholder?: string;
};

export default function RangeInputField({
  label = "",
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
  minPlaceholder = "",
  maxPlaceholder = "",
}: RangeInputFieldProps) {
  return (
    <Box>
      <Typography
        component="label"
        sx={{
          display: "block",
          fontSize: 14,
          fontWeight: "bold",
        }}
      >
        {label}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <InputField
          id="min-price"
          type="number"
          placeholder={minPlaceholder}
          value={minValue}
          onChange={(e) => onMinChange(e.target.value)}
          size="small"
        />
        <Typography>〜</Typography>
        <InputField
          id="max-price"
          type="number"
          placeholder={maxPlaceholder}
          value={maxValue}
          onChange={(e) => onMaxChange(e.target.value)}
          size="small"
        />
      </Box>
    </Box>
  );
}
