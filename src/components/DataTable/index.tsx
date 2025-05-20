import type { User } from "../../types/user";

interface Props {
  users: User[];
}

const DataTable: React.FC<Props> = ({ users }) => {
  return (
    <table data-testid="datatable" className="w-full bg-background text-foreground shadow rounded">
      <thead>
        <tr className="bg-muted text-left">
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
