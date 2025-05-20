import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Sidebar } from "../../../components";

describe("Sidebar", () => {
  it("renders and is visible when isOpen is true", () => {
    render(<Sidebar isOpen={true} onClose={vi.fn()} />);
    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toBeInTheDocument();
    expect(sidebar).toHaveClass("translate-x-0");
  });

  it("renders but is hidden when isOpen is false", () => {
    render(<Sidebar isOpen={false} onClose={vi.fn()} />);
    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toBeInTheDocument();
    expect(sidebar).toHaveClass("-translate-x-full");
  });

  it("calls onClose when the overlay is clicked", () => {
    const mockOnClose = vi.fn();
    render(<Sidebar isOpen={true} onClose={mockOnClose} />);
    const overlay = screen.getByTestId("sidebar-overlay");
    fireEvent.click(overlay);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
