import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Navbar } from "../../../components";

vi.mock("../ThemeToggle", () => ({
  default: () => <div data-testid="theme-toggle">ThemeToggle</div>,
}));

describe("Navbar", () => {
  it("renders the menu icon button", () => {
    const mockClick = vi.fn();
    render(<Navbar onMenuClick={mockClick} />);

    const button = screen.getByTestId("menu-bar");
    expect(button).toBeInTheDocument();
  });

  it("calls onMenuClick when the menu button is clicked", () => {
    const mockClick = vi.fn();
    render(<Navbar onMenuClick={mockClick} />);

    const button = screen.getByTestId("menu-bar");
    fireEvent.click(button);

    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it("renders the dashboard heading", () => {
    const mockClick = vi.fn();
    render(<Navbar onMenuClick={mockClick} />);

    const heading = screen.getByText("Admin Dashboard");
    expect(heading).toBeInTheDocument();
  });

  it("renders the ThemeToggle component", () => {
    const mockClick = vi.fn();
    render(<Navbar onMenuClick={mockClick} />);

    const themeToggle = screen.getByTestId("theme-toggle");
    expect(themeToggle).toBeInTheDocument();
  });
});
