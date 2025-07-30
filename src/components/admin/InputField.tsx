"use client";

import React from "react";
import { TextField, Box, Typography } from "@mui/material";

type Props = {
  label: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder: string;
  mt?: string | number;
};

export const InputField = ({
  label,
  type = "text",
  placeholder,
  mt = 0,
}: Props) => {
  return (
    <Box sx={{ mt }}>
      <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
        {label}
      </Typography>
      <TextField
        type={type}
        variant="outlined"
        margin="dense"
        placeholder={placeholder}
        fullWidth
      />
    </Box>
  );
};
