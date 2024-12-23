import styled from "styled-components/native";

export interface MealStatusStylesProps {
  isOnTheDiet: boolean;
}

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  padding: 12px 14px 14px 16px;
  border: 1px solid ${({ theme }) => theme.COLORS.gray_300};
  border-radius: 6px;
  margin-bottom: 8px;
`;

export const Divider = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.gray_400};
`;

export const IconStatus = styled.View<MealStatusStylesProps>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ theme, isOnTheDiet }) => {
    return isOnTheDiet ? theme.COLORS.green_mid : theme.COLORS.red_mid;
  }};
`;

export const TextHours = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.fontFamilys.bold};
  font-size: ${({ theme }) => theme.FONTS.fontSizes.xs}px;
  color: ${({ theme }) => theme.COLORS.gray_700};
`;

export const ContainerText = styled.View`
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
`;

export const TextInformation = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.fontFamilys.regular};
  font-size: ${({ theme }) => theme.FONTS.fontSizes.xs}px;
  color: ${({ theme }) => theme.COLORS.gray_500};
  display: -webkit-box;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;
