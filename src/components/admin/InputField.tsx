"use client";

import React from "react";
import { TextField, Box } from "@mui/material";

type InputFieldProps = {
  label?: string;
  mt?: string | number;
  size?: "small" | "medium";
  id?: string;
} & Omit<React.ComponentProps<typeof TextField>, "label" | "size" | "mt">;

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField(
    { label = "", mt = 0, size = "medium", id, ...props },
    ref,
  ) {
    return (
      <Box sx={{ mt }}>
        <Box
          component="label"
          htmlFor={id}
          sx={{
            display: "block",
            fontSize: 14,
            fontWeight: "bold",
            mb: 1,
          }}
        >
          {label}
        </Box>
        <TextField
          {...props}
          inputRef={ref}
          fullWidth
          variant="outlined"
          size={size}
          sx={{
            backgroundColor: "white",
            minWidth: 100,
          }}
        />
      </Box>
    );
  },
);

export default InputField;
