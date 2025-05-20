import { render, screen } from "@testing-library/react";
import { ThemeProvider, useTheme } from "../../context/ThemeProvider";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";

// Utility test component to consume the hook
const TestComponent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme-value">{theme}</span>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
};

describe("ThemeProvider", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = "";
  });

  it("uses light theme by default", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    expect(screen.getByTestId("theme-value")).toHaveTextContent("light");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });

  it("uses stored theme from localStorage", () => {
    localStorage.setItem("theme", "dark");

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId("theme-value")).toHaveTextContent("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("toggles from light to dark", async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId("theme-value")).toHaveTextContent("light");

    await user.click(screen.getByText("Toggle"));

    expect(screen.getByTestId("theme-value")).toHaveTextContent("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("toggles from dark to light", async () => {
    const user = userEvent.setup();
    localStorage.setItem("theme", "dark");

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId("theme-value")).toHaveTextContent("dark");

    await user.click(screen.getByText("Toggle"));

    expect(screen.getByTestId("theme-value")).toHaveTextContent("light");
    expect(localStorage.getItem("theme")).toBe("light");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });
  it("uses default context values without a provider", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let contextValue: any;
    const TestComponent = () => {
      contextValue = useTheme();
      return null;
    };

    render(<TestComponent />);

    expect(contextValue.theme).toBe("light");
    expect(() => contextValue.toggleTheme()).not.toThrow();
  });
});
