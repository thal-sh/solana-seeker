import { View, Text, TouchableOpacity, Image } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function Profile() {
  return (
    <View className="flex-1 bg-black px-6 pt-20">
      <View className="items-center mb-8">
        <Image
          source={{ uri: "https://placehold.co/100x100/000000/FFF?text=👤" }}
          className="w-24 h-24 rounded-full mb-4"
        />
        <Text className="text-white text-2xl font-semibold">Thaleous</Text>
        <Text className="text-zinc-400 text-sm">@thaleous.sol</Text>
      </View>
      <View className="bg-zinc-900 rounded-2xl p-4 mb-6">
        <Text className="text-white text-lg mb-2">Wallet</Text>
        <View className="flex-row justify-between items-center">
          <Text className="text-zinc-400">5fU3...8rTy</Text>
          <TouchableOpacity>
            <Feather name="copy" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="gap-4">
        <TouchableOpacity className="bg-zinc-900 rounded-2xl p-4 flex-row items-center justify-between">
          <Text className="text-white text-base">Edit Profile</Text>
          <Feather name="edit" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className="bg-zinc-900 rounded-2xl p-4 flex-row items-center justify-between">
          <Text className="text-white text-base">Connected Wallets</Text>
          <Ionicons name="wallet-outline" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className="bg-zinc-900 rounded-2xl p-4 flex-row items-center justify-between">
          <Text className="text-white text-base">Settings</Text>
          <Feather name="settings" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="mt-10 items-center">
        <Text className="text-red-500 text-base">Log out</Text>
      </TouchableOpacity>
    </View>
  );
}
