import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TableLoader from "../../../components/DataTable/TableLoader";

describe("TableLoader", () => {
  it("renders a status role for accessibility", () => {
    render(<TableLoader />);
    const status = screen.getByRole("status");
    expect(status).toBeInTheDocument();
  });

  it('includes an accessible "Loading..." message for screen readers', () => {
    render(<TableLoader />);
    const srOnlyText = screen.getByText("Loading...");
    expect(srOnlyText).toBeInTheDocument();
  });

  it("renders 5 loading row groups", () => {
    render(<TableLoader />);
    const loadingRows = screen
      .getAllByRole("status")[0]
      .querySelectorAll(".pt-4");
    expect(loadingRows.length).toBe(4); // first row is not using pt-4, remaining 4 do
  });
});
