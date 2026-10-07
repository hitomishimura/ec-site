"use client";

import React from "react";
import CategoryChip from "@/components/admin/CategoryChip";
import { Box, Autocomplete, Chip, TextField } from "@mui/material";

export type Option = {
  slug: string;
  name: string;
};

type MultiSelectChipFieldProps<T extends Option> = {
  label?: string;
  options: Option[];
  value: Option[];
  onChange: (value: Option[]) => void;
  placeholder?: string;
};

export default function MultiSelectChipField<T extends Option>({
  label = "",
  options,
  value,
  onChange,
  placeholder = "",
}: MultiSelectChipFieldProps<T>) {
  return (
    <Box>
      {label && (
        <Box
          component="label"
          sx={{
            display: "block",
            fontSize: 14,
            fontWeight: "bold",
            mb: 1,
          }}
        >
          {label}
        </Box>
      )}
      <Autocomplete
        multiple
        options={options}
        value={value}
        onChange={(_, newValue) => onChange(newValue)}
        getOptionLabel={(option) => option.name}
        isOptionEqualToValue={(option, value) => option.slug === value.slug}
        renderValue={(value, getItemProps) =>
          value.map((option, index) => {
            const { key: _key, ...chipProps } = getItemProps({ index });

            return (
              <CategoryChip
                key={option.slug}
                label={option.name}
                {...chipProps}
              />
            );
          })
        }
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            fullWidth
            size="small"
            sx={{ backgroundColor: "white", minWidth: 100 }}
          />
        )}
        renderOption={(props, option) => {
          const { key, ...optionProps } = props;
          return (
            <li key={key} {...optionProps}>
              <CategoryChip label={option.name} />
            </li>
          );
        }}
        sx={{ minWidth: 200 }}
      />
    </Box>
  );
}
