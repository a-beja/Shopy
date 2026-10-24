import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind
      </Text>
      <Text className="font-work-black text-primary">Welcome to Nativewind</Text>
      <Text className="font-work-medium text-secondary-100">Welcome to Nativewind</Text>
      <Text className="font-work-light">Welcome to Nativewind</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
