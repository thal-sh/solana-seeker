import { TouchableOpacity } from "react-native";
import { Text } from "@/components/ui/text";
import React from "react";

interface CardButtonProps {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
  className?: string; // optional extra styling
}

const CardButton = React.forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  CardButtonProps
>(({ icon, label, className, ...props }, ref) => {
  return (
    <TouchableOpacity
      ref={ref}
      className={`flex-1 flex-col justify-center items-center gap-2 bg-background-0 p-4 rounded-md ${className}`}
      {...props}
    >
      {icon}
      <Text className="text-center text-sm text-white">{label}</Text>
    </TouchableOpacity>
  );
});

CardButton.displayName = "ActionCardButton";

export { CardButton };
