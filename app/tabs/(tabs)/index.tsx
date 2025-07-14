import { Card } from "@/components/ui/card";
import { TouchableOpacity, View } from "react-native";
import { Text } from "@/components/ui/text";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { CardButton } from "@/components/buttons/CardButton";

export default function Home() {
  return (
    <View className="flex-1 bg-black px-5 pt-20 gap-10">
      <View className="mb-6">
        <Text className="text-lg">Wallet Balance</Text>
        <Text className="text-3xl font-bold">◎ 2.41 SOL</Text>
      </View>
      <Card className="rounded-2xl">
        <Text className="text-xl">Available drops nearby</Text>
        <TouchableOpacity className="flex-row items-center justify-between p-4">
          <View>
            <Text className="text-base">Solana POAP</Text>
            <Text className="text-zinc-400 text-sm">3 of 100 remaining</Text>
          </View>
          <Feather name="chevron-right" size={24} color="white" />
        </TouchableOpacity>
      </Card>
      <View>
        <Text className="text-xl mt-6 mb-2">Nearby Devices</Text>
        <Card className="rounded-2xl">
          <TouchableOpacity className="flex-row items-center justify-between px-2 py-1">
            <View>
              <Text className="text-base">Backpack</Text>
            </View>
            <Feather name="chevron-right" size={24} color="white" />
          </TouchableOpacity>
        </Card>
      </View>
      <View className="flex-row justify-between items-center gap-4">
        <Link href="/tap" asChild>
          <CardButton
            icon={<Feather name="arrow-up" size={24} color="white" />}
            label="Tap to pay"
          />
        </Link>
        <CardButton
          icon={<Ionicons name="qr-code-sharp" size={24} color="white" />}
          label="Scan QR"
        />
        <CardButton
          icon={<Feather name="arrow-down" size={24} color="white" />}
          label="Receive"
        />
      </View>
    </View>
  );
}
