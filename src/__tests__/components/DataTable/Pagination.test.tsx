import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { Pagination } from "../../../components";

describe("Pagination component", () => {
  const onPageChange = vi.fn();

  afterEach(() => {
    onPageChange.mockClear();
  });

  it("renders page info correctly", () => {
    render(<Pagination page={2} totalPages={5} onPageChange={onPageChange} />);
    expect(screen.getByText("Page 2 of 5")).toBeInTheDocument();
  });

  it("disables Previous button on first page", () => {
    render(<Pagination page={1} totalPages={5} onPageChange={onPageChange} />);
    const prevButton = screen.getByRole("button", { name: /previous/i });
    expect(prevButton).toBeDisabled();
  });

  it("disables Next button on last page", () => {
    render(<Pagination page={5} totalPages={5} onPageChange={onPageChange} />);
    const nextButton = screen.getByRole("button", { name: /next/i });
    expect(nextButton).toBeDisabled();
  });

  it("calls onPageChange with page - 1 when Previous button clicked", () => {
    render(<Pagination page={3} totalPages={5} onPageChange={onPageChange} />);
    const prevButton = screen.getByRole("button", { name: /previous/i });
    fireEvent.click(prevButton);
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it("calls onPageChange with page + 1 when Next button clicked", () => {
    render(<Pagination page={3} totalPages={5} onPageChange={onPageChange} />);
    const nextButton = screen.getByRole("button", { name: /next/i });
    fireEvent.click(nextButton);
    expect(onPageChange).toHaveBeenCalledWith(4);
  });

  it("does not call onPageChange when clicking disabled Previous button", () => {
    render(<Pagination page={1} totalPages={5} onPageChange={onPageChange} />);
    const prevButton = screen.getByRole("button", { name: /previous/i });
    fireEvent.click(prevButton);
    expect(onPageChange).not.toHaveBeenCalled();
  });

  it("does not call onPageChange when clicking disabled Next button", () => {
    render(<Pagination page={5} totalPages={5} onPageChange={onPageChange} />);
    const nextButton = screen.getByRole("button", { name: /next/i });
    fireEvent.click(nextButton);
    expect(onPageChange).not.toHaveBeenCalled();
  });
});
