import { render, screen, fireEvent } from "@testing-library/react-native";
import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  it("should be return city details selected", () => {
    const data = [
      {
        id: "1",
        name: "Campinas",
        latitude: -22.9,
        longitude: -47.06,
      },
      {
        id: "2",
        name: "São Paulo",
        latitude: -789,
        longitude: -344,
      },
    ];

    const onPress = jest.fn();

    const { debug } = render(
      <SelectList data={data} onChange={() => {}} onPress={onPress} />
    );

    // const selectedCity = screen.getByText("Campinas");
    const selectedCity = screen.getByText(/campinas/i);

    fireEvent.press(selectedCity);

    // expect(selectedCity).toBeTruthy();
    expect(onPress).toBeCalledWith(data[0]);
  });

  it("not should be show options when data props is empty", () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);

    const options = screen.queryByTestId("options");

    expect(options.children).toHaveLength(0);
  });
});
