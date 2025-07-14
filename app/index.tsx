import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Link } from "expo-router";
import { Center } from "@/components/ui/center";

export default function Home() {
  return (
    <View className="flex-1 bg-black">
      <Center className="flex-1 justify-center items-center gap-4">
        <Text className="text-white text-2xl font-semibold">
          Connect your Wallet
        </Text>

        <Link href="/tabs/(tabs)" asChild>
          <TouchableOpacity className="bg-white px-6 py-3 rounded-xl">
            <Text className="text-black font-medium">Connect Wallet</Text>
          </TouchableOpacity>
        </Link>
      </Center>
    </View>
  );
}
