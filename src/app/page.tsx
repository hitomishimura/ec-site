import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <Image src="/profile.png" alt="Profile" width={100} height={100} />
    </div>
  );
}
