"use client";

import React from "react";
import { TextField, Box, Typography } from "@mui/material";

type InputFieldProps = {
  label: string;
  mt?: string | number;
  size?: "small" | "medium";
} & Omit<React.ComponentProps<typeof TextField>, "label" | "size" | "mt">;

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField({ label, mt = 0, size = "medium", ...props }, ref) {
    return (
      <Box sx={{ mt }}>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          {label}
        </Typography>
        <TextField
          {...props}
          inputRef={ref}
          fullWidth
          variant="outlined"
          size={size}
          sx={{
            backgroundColor: "white",
            minWidth: 200,
          }}
        />
      </Box>
    );
  },
);

export default InputField;
