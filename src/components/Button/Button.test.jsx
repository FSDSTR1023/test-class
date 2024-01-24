import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  const onClickFunction = vi.fn();
  beforeEach(() => {
    render(
      <Button
        data-testid="root-button"
        onClick={onClickFunction}
        icon="👍"
        outlined={true}
        className="primary"
      >
        Text of the button
      </Button>
    );
  });
  afterEach(() => {
    cleanup();
  });
  it("renders a button", () => {
    screen.getByRole("button");
  });

  it("renders the text of the button", () => {
    expect(screen.getByRole("button")).toHaveTextContent("Text of the button");
  });
  //this test is using React testing library with vitest
  it("executes the onClick function when clicked", () => {
    screen.getByRole("button").click();
    expect(onClickFunction).toHaveBeenCalled();
  });
  it("is disabled when disabled is true", () => {
    render(
      <Button onClick={onClickFunction} disabled>
        Disabled button
      </Button>
    );
    expect(screen.queryByText("Disabled button")).toBeDisabled();
  });

  it("is blue class is primary", () => {
    expect(screen.queryByText(/Text of the button/i)).toHaveClass("primary");
  });

  it("when outlined is true, it has the outlined class", () => {
    expect(screen.getByTestId("root-button")).toHaveClass("outlined");
  });

  it("an icon is shown when icon is passed", () => {
    screen.queryByText("👍");
  });
});
