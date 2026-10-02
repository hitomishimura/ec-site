"use client";

import { Typography, Alert } from "@mui/material";

type MessageErrorAlertProps = {
  messages: (string | undefined)[];
  variant?: "filled" | "outlined" | "standard";
};

export default function MessageErrorAlert({
  messages,
  variant = "standard",
}: MessageErrorAlertProps) {
  if (messages.length === 0) return null;

  return (
    <Alert
      severity="error"
      variant={variant}
      sx={{
        mb: 2,
      }}
    >
      {messages.map((message, index) => (
        <Typography key={index} sx={{ fontSize: 14 }}>
          {message}
        </Typography>
      ))}
    </Alert>
  );
}
