import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn function", () => {
  it("should merge classes correctly", () => {
    expect(cn("text-red-500", "bg-blue-500")).toBe("text-red-500 bg-blue-500");
  });

  it("should handle conditional classes", () => {
    const isActive = true;
    expect(cn("base-class", isActive && "active-class")).toBe(
      "base-class active-class",
    );
  });

  it("should handle false and null conditions", () => {
    const isActive = false;
    expect(cn("base-class", isActive && "active-class", null)).toBe(
      "base-class",
    );
  });

  it("should merge tailwind classes properly", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });

  it("should work with object notation", () => {
    expect(cn("base", { conditional: true, "not-included": false })).toBe(
      "base conditional",
    );
  });

  it("should handle arrays and mixed inputs without throwing", () => {
    // This covers the previous bug where importing clsx incorrectly or
    // passing the whole inputs array to clsx caused runtime issues in some
    // package manager / bundler combos (npm vs pnpm differences). Ensure
    // cn handles arrays/objects/conditionals correctly.
    const result = cn(["text-red-500", { "bg-blue-500": true }], "px-2");
    expect(result).toBe("text-red-500 bg-blue-500 px-2");
  });
});
