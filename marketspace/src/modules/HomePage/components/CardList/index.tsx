import { AdCard } from "@components/AdCard";
import { Box } from "@gluestack-ui/themed";

export const CardList = () => {
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
      <AdCard />
      <AdCard />
      <AdCard />
      <AdCard />
      <AdCard />
      <AdCard />
    </Box>
  );
};
