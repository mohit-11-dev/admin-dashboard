import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "../../../context/ThemeProvider";
import { describe, expect, it } from "vitest";
import ThemeToggle from "../../../components/ThemeToggle";

describe("ThemeToggle", () => {
  it("renders with light theme initially", () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByTestId("theme-toggle");
    expect(button).toBeInTheDocument();
    expect(button.textContent).toMatch(/light/i);
  });

  it("toggles theme on click", () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByTestId("theme-toggle");

    // Initial state: "☀️ Light"
    expect(button.textContent).toMatch(/light/i);

    // Click to toggle
    fireEvent.click(button);

    // Should change to: "🌙 Dark"
    expect(button.textContent).toMatch(/dark/i);

    // Click again
    fireEvent.click(button);

    // Should change back to: "☀️ Light"
    expect(button.textContent).toMatch(/light/i);
  });
});
