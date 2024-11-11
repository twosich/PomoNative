import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

type TimeMode = "POMO" | "SHORT" | "BREAK";

interface HeaderProps {
  currentTime: TimeMode;
  setCurrent: React.Dispatch<React.SetStateAction<TimeMode>>;
  isSetTime: React.Dispatch<React.SetStateAction<number>>;
}

export default function Header({ currentTime, setCurrent, isSetTime }: HeaderProps) {
  
  function handlePress(index: number): void {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    const timeMode: TimeMode = index === 0 ? "POMO" : index === 1 ? "SHORT" : "BREAK";
    
    setCurrent(timeMode);
    isSetTime(newTime * 60);
  }

  const options = ["Pomodoro", "Short Break", "Long Break"];

  return (
    <View className="flex-row">
      {options.map((item, index) => (
        <TouchableOpacity
          className={`border-4 items-center rounded-xl my-4 p-2 w-1/3 
          ${currentTime !== (index === 0 ? "POMO" : index === 1 ? "SHORT" : "BREAK") ? 'border-transparent' : 'border-white'}`}
          key={index}
          onPress={() => handlePress(index)}
        >
          <Text className="text-2xl font-bold">{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
