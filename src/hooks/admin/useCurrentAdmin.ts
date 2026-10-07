import { useEffect, useState } from "react";
import { getCurrentAdmin } from "@/api/admin/admin";
import type { Admin } from "@/types/admin";

export function useCurrentAdmin() {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchAdmin = async () => {
      try {
        const currentAdmin = await getCurrentAdmin();
        if (!isMounted) return;
        setAdmin(currentAdmin);
      } catch (e) {
        if (!isMounted) return;
        setError(
          e instanceof Error
            ? e.message
            : "ログイン中の管理者情報の取得に失敗しました。",
        );
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    fetchAdmin();

    return () => {
      isMounted = false;
    };
  }, []);

  return { admin, loading, error };
}
