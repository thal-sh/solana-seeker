import { TouchableOpacity } from "react-native";
import { Text } from "@/components/ui/text";

interface CardButtonProps {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
  className?: string; // optional extra styling
}

export function CardButton({
  icon,
  label,
  onPress,
  className = "",
}: CardButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-1 flex-col justify-center items-center gap-2 bg-background-0 p-4 rounded-2xl ${className}`}
    >
      {icon}
      <Text className="text-center text-sm">{label}</Text>
    </TouchableOpacity>
  );
}
