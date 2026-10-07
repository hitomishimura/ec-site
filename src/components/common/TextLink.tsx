import Link from "next/link";
import { ReactNode } from "react";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  color?: string;
};

export default function TextLink({
  href,
  children,
  color = "#1976d2",
}: TextLinkProps) {
  return (
    <Link
      href={href}
      style={{
        color: color,
        textDecoration: "underline",
        textUnderlineOffset: "4px",
      }}
    >
      {children}
    </Link>
  );
}
