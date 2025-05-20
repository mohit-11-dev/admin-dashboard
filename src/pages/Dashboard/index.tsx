import { useState } from "react";
import { useUsers } from "../../hooks";
import { DataTable, Navbar, Sidebar, SummaryCards } from "../../components";

const Dashboard = () => {
  const [page, setPage] = useState(1);
  const { users, loading, error, totalPages } = useUsers(page);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 min-h-screen bg-gray-50">
        <Navbar />
        <div className="p-4">
          <SummaryCards />
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!loading && <DataTable users={users} />}
          <div className="mt-4 flex gap-2">
            <button
              disabled={page <= 1}
              onClick={() => setPage(page - 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Prev
            </button>
            <button
              disabled={page >= totalPages}
              onClick={() => setPage(page + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
