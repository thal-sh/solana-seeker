import { Card } from "@/components/ui/card";
import { TouchableOpacity, View } from "react-native";
import { Text } from "@/components/ui/text";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View className="flex-1 bg-black px-5 pt-20 gap-10">
      <Card className="rounded-2xlx`">
        <Text className="text-xl">Available drops nearby</Text>
        <TouchableOpacity className="flex-row items-center justify-between p-4">
          <View>
            <Text className="text-white text-base">Solana POAP</Text>
            <Text className="text-zinc-400 text-sm">3 of 100 remaining</Text>
          </View>
          <Feather name="chevron-right" size={24} color="white" />
        </TouchableOpacity>
      </Card>
      <View>
        <Text className="text-white text-xl mt-6 mb-2">Nearby Devices</Text>
        <Card className="rounded-2xl">
          <TouchableOpacity className="flex-row items-center justify-between px-2 py-1">
            <View>
              <Text className="text-white text-base">Backpack</Text>
            </View>
            <Feather name="chevron-right" size={24} color="white" />
          </TouchableOpacity>
        </Card>
      </View>
      <View className="flex-row justify-between items-center gap-4">
        <Link href="/tap" asChild>
          <TouchableOpacity>
            <Card className="flex-1  flex-col justify-center items-center gap-2">
              <Feather name="arrow-up" size={24} color="white" />
              <Text className="text-center text-white text-sm">Tap to pay</Text>
            </Card>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity>
          <Card className="flex-1  flex-col justify-center items-center gap-2">
            <Ionicons name="qr-code-sharp" size={24} color="white" />
            <Text className="text-center text-white text-sm">Scan QR</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card className="flex-1  flex-col justify-center items-center gap-2">
            <Feather name="arrow-down" size={24} color="white" />
            <Text className="text-center text-white text-sm">Receive</Text>
          </Card>
        </TouchableOpacity>
      </View>
    </View>
  );
}
