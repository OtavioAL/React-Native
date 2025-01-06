import { AdCard } from "@components/AdCard";
import { Box } from "@gluestack-ui/themed";

interface IProps {
  isMyAd?: boolean;
}

export const CardList = ({ isMyAd }: IProps) => {
  return (
    <Box
      // flex={4}
      p={"$5"}
      alignItems="center"
      justifyContent="space-between"
      gap={20}
      flexDirection="row"
      flexWrap="wrap"
      bg="$gra700"
    >
      <AdCard isMyAd={isMyAd} />
      <AdCard isMyAd={isMyAd} />
      <AdCard isMyAd={isMyAd} />
      <AdCard isMyAd={isMyAd} />
      <AdCard isMyAd={isMyAd} />
      <AdCard isMyAd={isMyAd} />
    </Box>
  );
};
