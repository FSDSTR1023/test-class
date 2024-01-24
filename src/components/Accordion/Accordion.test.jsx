import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { Accordion } from "./Accordion";

describe("Accordion", () => {
  beforeEach(() => {
    render(<Accordion title="Test Title">Game of Thrones</Accordion>);
  });
  it("renders a title", () => {
    expect(screen.getByText("TEST TITLE")).toBeDefined();
  });
  it("the content shouldn't be pressent in first render", () => {
    expect(screen.queryByText(/Thrones/i)).toBeNull();
  });
  it("the content should be pressent after click", () => {
    const h3Title = screen.queryByText("TEST TITLE");
    fireEvent.click(h3Title);
    expect(screen.getByText(/Thrones/i)).toBeDefined();
  });
  it("the content shouldn't be pressent after second click", () => {
    const h3Title = screen.queryByText("TEST TITLE");
    fireEvent.click(h3Title);
    fireEvent.click(h3Title);
    expect(screen.queryByText(/Thrones/i)).toBeNull();
  });
});
