/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, fireEvent } from "@testing-library/react";
import * as hooks from "../../../hooks";

import { beforeEach, describe, expect, it, vi } from "vitest";
import Dashboard from "../../../pages/Dashboard";

describe("Dashboard", () => {
  const mockUsers = [
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "john@example.com",
      avatar: "",
    },
    {
      id: 2,
      first_name: "Jane",
      last_name: "Smith",
      email: "jane@example.com",
      avatar: "",
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders loading state initially", () => {
    vi.spyOn(hooks, "useUsers").mockReturnValue({
      users: [],
      loading: true,
      error: "",
      totalPages: 1,
    });

    render(<Dashboard />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders users in data table after loading", () => {
    vi.spyOn(hooks, "useUsers").mockReturnValue({
      users: mockUsers,
      loading: false,
      error: "",
      totalPages: 1,
    });

    render(<Dashboard />);
    expect(screen.getByTestId("datatable")).toHaveTextContent("John");
    expect(screen.getByTestId("datatable")).toHaveTextContent("Jane");
  });

  it("filters users based on search input", () => {
    vi.spyOn(hooks, "useUsers").mockReturnValue({
      users: mockUsers,
      loading: false,
      error: "",
      totalPages: 1,
    });

    render(<Dashboard />);
    const searchInput = screen.getByPlaceholderText("Search by name or email");

    fireEvent.change(searchInput, { target: { value: "Jane" } });

    expect(screen.getByTestId("datatable")).toHaveTextContent("Jane");
    expect(screen.getByTestId("datatable")).not.toHaveTextContent("John");
  });

  it("shows error message when error is present", () => {
    vi.spyOn(hooks, "useUsers").mockReturnValue({
      users: [],
      loading: false,
      error: "Failed to load data",
      totalPages: 1,
    });

    render(<Dashboard />);
    expect(screen.getByText("Failed to load data")).toBeInTheDocument();
  });

  it("toggles sidebar open and close", () => {
    vi.spyOn(hooks, "useUsers").mockReturnValue({
      users: [],
      loading: false,
      error: "",
      totalPages: 1,
    });

    render(<Dashboard />);

    // Initially sidebar closed
    expect(screen.getByTestId("sidebar")).toHaveAttribute("data-open", "false");

    // Click menu button to open sidebar
    fireEvent.click(screen.getByTestId("menu-bar"));
    expect(screen.getByTestId("sidebar")).toHaveAttribute("data-open", "true");

    fireEvent.click(screen.getByTestId("sidebar-closed"));
    expect(screen.getByTestId("sidebar")).toHaveAttribute("data-open", "false");
  });
});
