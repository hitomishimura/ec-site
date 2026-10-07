import { Chip, ChipProps } from "@mui/material";

type CategoryChipProps = ChipProps & {
  label: string;
};

export default function CategoryChip({ label, ...props }: CategoryChipProps) {
  return (
    <Chip
      label={label}
      size="small"
      {...props}
      sx={{
        backgroundColor: "#FF3869",
        color: "white",
        fontWeight: 600,
      }}
    />
  );
}
