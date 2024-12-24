import styled from "styled-components/native";

export const ContainerRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.fontFamilys.bold};
  font-size: ${({ theme }) => theme.FONTS.fontSizes.sm}px;
  color: ${({ theme }) => theme.COLORS.gray_600};
`;

export interface IPropsOptionsSelect {
  isSelected?: boolean;
}

export const OptionsSelect = styled.TouchableOpacity<IPropsOptionsSelect>`
  flex: 1;
  height: 40px;
  background-color: ${({ theme, isSelected }) =>
    isSelected === undefined
      ? theme.COLORS.gray_300
      : isSelected
      ? theme.COLORS.green_light
      : theme.COLORS.red_light};
  border: 1px solid
    ${({ theme, isSelected }) =>
      isSelected === undefined
        ? theme.COLORS.gray_300
        : isSelected
        ? theme.COLORS.green_dark
        : theme.COLORS.red_dark};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
`;

export const IndicatorStatus = styled.View<{ isGreenOption?: boolean }>`
  width: 10px;
  height: 10px;
  padding: 1px;
  border-radius: 50%;
  background-color: ${({ theme, isGreenOption }) =>
    isGreenOption ? theme.COLORS.green_dark : theme.COLORS.red_dark};
`;
