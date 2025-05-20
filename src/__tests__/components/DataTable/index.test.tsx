import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import type { User } from "../../../types/user";
import { DataTable } from "../../../components";
import '@testing-library/jest-dom';

describe("DataTable", () => {
  const users: User[] = [
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      avatar: "",
    },
    {
      id: 2,
      first_name: "Jane",
      last_name: "Smith",
      email: "jane.smith@example.com",
      avatar: "",
    },
  ];

  it("renders table headers correctly", () => {
    render(<DataTable users={users} />);
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("renders the correct number of rows", () => {
    render(<DataTable users={users} />);
    // +1 for header row
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(users.length + 1);
  });

  it("displays user data correctly", () => {
    render(<DataTable users={users} />);

    users.forEach((user) => {
      expect(screen.getByText(user.id.toString())).toBeInTheDocument();
      expect(
        screen.getByText(`${user.first_name} ${user.last_name}`)
      ).toBeInTheDocument();
      expect(screen.getByText(user.email)).toBeInTheDocument();
    });
  });

  it("renders no user rows when users array is empty", () => {
    render(<DataTable users={[]} />);
    // Only header row should be present
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(1);
  });
});
