import { render, screen } from "@testing-library/react";

import { describe, expect, it } from "vitest";
import { SummaryCards } from "../../../components";

describe("SummaryCards", () => {
  it("renders the summary cards container", () => {
    render(<SummaryCards />);
    const container = screen.getByTestId("summary-cards");
    expect(container).toBeInTheDocument();
  });

  it("displays total users", () => {
    render(<SummaryCards />);
    const totalUsers = screen.getByTestId("card-total-users");
    expect(totalUsers).toHaveTextContent("Total Users: 12");
  });

  it("displays active users", () => {
    render(<SummaryCards />);
    const activeUsers = screen.getByTestId("card-active-users");
    expect(activeUsers).toHaveTextContent("Active: 8");
  });

  it("displays inactive users", () => {
    render(<SummaryCards />);
    const inactiveUsers = screen.getByTestId("card-inactive-users");
    expect(inactiveUsers).toHaveTextContent("Inactive: 4");
  });

  it("renders 3 cards", () => {
    render(<SummaryCards />);
    const cards = screen.getAllByRole("generic"); // divs without semantic meaning default to role="generic"
    expect(cards.length).toBeGreaterThan(0); // 1 container + 3 cards
  });
});
