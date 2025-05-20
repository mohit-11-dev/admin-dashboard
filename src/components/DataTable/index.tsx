import type { User } from "../../types/user";

interface Props {
  users: User[];
}

const DataTable: React.FC<Props> = ({ users }) => {
  return (
    <table className="w-full bg-white shadow rounded">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-2">ID</th>
          <th className="p-2">Name</th>
          <th className="p-2">Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td className="p-2">{u.id}</td>
            <td className="p-2">
              {u.first_name} {u.last_name}
            </td>
            <td className="p-2">{u.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
