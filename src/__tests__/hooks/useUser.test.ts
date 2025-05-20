import { renderHook, waitFor } from "@testing-library/react";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
  type Mock,
} from "vitest";
import { useUsers } from "../../hooks";

const mockUsers = [
  { id: 1, email: "user1@test.com", first_name: "User", last_name: "One" },
  { id: 2, email: "user2@test.com", first_name: "User", last_name: "Two" },
];

describe("useUsers", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn();
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("fetches users successfully", async () => {
    (fetch as Mock).mockResolvedValueOnce({
      json: async () => ({
        data: mockUsers,
        total_pages: 3,
      }),
    });

    const { result } = renderHook(() => useUsers(1));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.users).toEqual(mockUsers);
    expect(result.current.totalPages).toBe(3);
    expect(result.current.error).toBe("");
  });

  it("sets error on fetch failure", async () => {
    (fetch as Mock).mockRejectedValueOnce(new Error("Network Error"));

    const { result } = renderHook(() => useUsers(1));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.users).toEqual([]);
    expect(result.current.totalPages).toBe(1);
    expect(result.current.error).toBe("Failed to load data");
  });
});
