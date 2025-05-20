import { useState, useMemo } from "react";
import { useUsers } from "../../hooks";
import {
  DataTable,
  Navbar,
  Pagination,
  Sidebar,
  SummaryCards,
} from "../../components";
import TableLoader from "../../components/DataTable/TableLoader";

const Dashboard = () => {
  const [page, setPage] = useState(1);
  const { users, loading, error, totalPages } = useUsers(page);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Filter users client-side on current page
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      `${user.first_name} ${user.last_name} ${user.email}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search, users]);

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <main className="flex-1 min-h-screen">
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
        <div className="p-4">
          <SummaryCards />

          <input
            type="text"
            placeholder="Search by name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded w-full bg-background text-foreground md:w-1/3 mb-4"
          />

          {loading ? <TableLoader /> : <DataTable users={filteredUsers} />}
          {error && <p className="text-red-500">{error}</p>}
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
