import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TapToPay() {
  return (
    <View className="flex-1 bg-black px-6 pt-20 items-center justify-between">
      <View className="items-center">
        <Ionicons name="wifi-outline" size={64} color="white" />
        <Text className="text-white text-2xl mt-6 font-semibold">
          Waiting for receiver...
        </Text>
        <Text className="text-zinc-400 mt-2 text-center">
          Hold your phone near the other device to send Solana.
        </Text>
      </View>

      <View className="mb-10 items-center w-full">
        <ActivityIndicator size="large" color="white" className="mb-4" />
        <TouchableOpacity className="w-full bg-zinc-800 p-4 rounded-2xl items-center mt-4">
          <Text className="text-white text-base">Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
