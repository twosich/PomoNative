import React from "react";
import { View, Text } from "react-native";

type TimerProps = {
  time: number;
};

export default function Timer({ time }: TimerProps) {
  const formattedTime = `${Math.floor(time / 60).toString().padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;

  return (
    <View className="flex-[0.3] justify-center bg-slate-100 rounded-3xl">
      <Text className="text-7xl text-center p-3 font-bold">{formattedTime}</Text>
    </View>
  );
}
