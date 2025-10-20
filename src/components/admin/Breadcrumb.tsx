"use client";

import React from "react";
import { Breadcrumbs, Link, Typography, Box } from "@mui/material";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface Props {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vh",
        mb: 2,
      }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        {items.map((item, index) =>
          item.href && index !== items.length - 1 ? (
            <Link
              key={index}
              href={item.href}
              style={{ textDecoration: "none", fontSize: "14px" }}
            >
              {item.label}
            </Link>
          ) : (
            <Typography key={index} style={{ fontSize: "14px" }}>
              {item.label}
            </Typography>
          )
        )}
      </Breadcrumbs>
    </Box>
  );
}
