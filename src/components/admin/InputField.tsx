"use client";

import React from "react";
import { TextField, Box, Typography } from "@mui/material";

type Props = {
  label: string;
  placeholder: string;
  mt?: string | number;
};

const InputField: React.FC<Props> = ({ label, placeholder, mt = 0 }) => {
  return (
    <Box sx={{ mt }}>
      <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
        {label}
      </Typography>
      <TextField
        type="password"
        variant="outlined"
        margin="dense"
        placeholder={placeholder}
        fullWidth
      />
    </Box>
  );
};

export default InputField;
