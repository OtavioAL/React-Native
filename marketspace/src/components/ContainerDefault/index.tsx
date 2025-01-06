import { ScrollView } from "@gluestack-ui/themed";
import { SafeAreaView } from "@gluestack-ui/themed";

export function ContainerDefault({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView flex={1} pt={6}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
