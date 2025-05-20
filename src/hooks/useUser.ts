import { useEffect, useState } from "react";
import type { User } from "../types/user";

export const useUsers = (page: number) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users?page=${page}`, {
          headers: { "x-api-key": "reqres-free-v1" },
        });
        const data = await res.json();
        setUsers(data.data);
        setTotalPages(data.total_pages);
      } catch (e) {
        setError("Failed to load data");
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [page]);

  return { users, loading, error, totalPages };
};
