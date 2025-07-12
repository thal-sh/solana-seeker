import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { useState } from "react";

export default function Send() {
  const [amount, setAmount] = useState("");

  return (
    <View className="flex-1 bg-black px-6 py-20 justify-between">
      <View>
        <Text className="text-white text-xl mb-4">Enter Amount to Send</Text>
        <TextInput
          className="bg-zinc-800 text-white p-4 rounded-xl text-lg"
          placeholder="Amount in SOL"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
      </View>

      <TouchableOpacity
        className="bg-purple-600 p-4 rounded-2xl items-center"
        onPress={() =>
          router.push({ pathname: "/tabs/tap/send", params: { amount } })
        }
      >
        <Text className="text-white text-lg font-semibold">Tap to Pay</Text>
      </TouchableOpacity>
    </View>
  );
}
