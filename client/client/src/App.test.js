import { render } from "@testing-library/react";
import Main from "../src/components/Main";
import Pop from "../src/components/Pop";
import Poptwo from "../src/components/Popup";
import Popthree from "../src/components/pop3";

it("Main Works correctly", () => {
  const { queryByTestId } = render(<Main />);
  expect(queryByTestId("Main")).toBeTruthy();
});

it("Pop1 Clears Tests", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<Pop />);
  expect(queryByTestId("pop1")).toBeTruthy();
  expect(queryByTestId("Close")).toBeTruthy();
  expect(queryByTestId("Cell1")).toBeTruthy();
  expect(queryByTestId("Cell2")).toBeTruthy();
  expect(queryByPlaceholderText("Title")).toBeTruthy();
  expect(queryByPlaceholderText("Description")).toBeTruthy();
  expect(queryByPlaceholderText("Delivery date")).toBeTruthy();
  expect(queryByPlaceholderText("Project Cost")).toBeTruthy();
  expect(queryByTestId("Project-Button")).toBeTruthy();
});

it("Pop2 Clears Tests", () => {
  const { queryByTestId } = render(<Poptwo />);
  expect(queryByTestId("pop2")).toBeTruthy();
  expect(queryByTestId("back")).toBeTruthy();
  expect(queryByTestId("exit")).toBeTruthy();
  expect(queryByTestId("Cell1")).toBeTruthy();
  expect(queryByTestId("Cell2")).toBeTruthy();
  expect(queryByTestId("Pay-Button")).toBeTruthy();
});

it("Pop3 Clears Tests", () => {
  const { queryByTestId } = render(<Popthree />);
  expect(queryByTestId("pop3")).toBeTruthy();
  expect(queryByTestId("Cell1")).toBeTruthy();
  expect(queryByTestId("Cell2")).toBeTruthy();
  expect(queryByTestId("Cancel-Button")).toBeTruthy();
});
