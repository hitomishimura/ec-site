import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Button } from "@mui/material";

export default function Page() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <Image src="/profile.png" alt="Profile" width={100} height={100} />
      <Button variant="contained">Hello World</Button>
      <br />
      <Link href="/admin/login" passHref>
        管理者ログイン
      </Link>
    </div>
  );
}
