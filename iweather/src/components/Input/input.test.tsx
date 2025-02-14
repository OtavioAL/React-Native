import { fireEvent, render, screen } from "@testing-library/react-native";
import { Input } from "@components/Input";
import { useState } from "react";

describe("Component: Input", () => {
  it("should be render without activity indicator if isLoading is false", () => {
    // const { debug } =

    render(<Input />);

    const activityIndicator = screen.queryByTestId("activity-indicator");

    expect(activityIndicator).toBeNull();
  });

  it("should be render activity indicator if isLoading is true", () => {
    render(<Input isLoading />);

    const activityIndicator = screen.getByTestId("activity-indicator");

    expect(activityIndicator).toBeTruthy();
  });

  it("should update the value of the input correctly", () => {
    const TestComponent = () => {
      const [text, setText] = useState("");
      return (
        <Input value={text} onChangeText={setText} placeholder="Digite algo" />
      );
    };

    const { getByPlaceholderText } = render(<TestComponent />);

    const input = getByPlaceholderText("Digite algo");
    fireEvent.changeText(input, "Teste");

    expect(input.props.value).toBe("Teste");
  });
});
