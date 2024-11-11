import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Header from './src/components/Header';
import Timer from './src/components/Timer';
import "./global.css";

type TimeMode = "POMO" | "SHORT" | "BREAK";

export default function App() {

  const colors: { [key in TimeMode]: string } = {
    POMO: "bg-emerald-400",
    SHORT: "bg-violet-400",
    BREAK: "bg-orange-400",
  };

  const [isActive, setIsActive] = useState<boolean>(false);
  const [isWork, setIsWork] = useState<boolean>(false);
  const [time, setTime] = useState<number>(25 * 60);
  const [currentTime, setCurrentTime] = useState<TimeMode>("POMO");

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }

    if (time === 0) {
      setIsActive(false);
      setIsWork(!isWork);
      setTime(isWork ? 300 : 1500);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, time, isWork]);

  function handleActive() {
    setIsActive(!isActive);
  }

  return (
    <View className={`flex-1 px-5 pt-24 w-full h-screen ${colors[currentTime]}`}>
      <Text className="text-6xl font-bold">Pomodoro</Text>
      <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime} />
      <Timer time={time} />
      <TouchableOpacity className="pt-5" onPress={handleActive}>
        <Text className="text-center text-slate-100 text-4xl bg-black py-3 font-bold rounded-2xl">
          {isActive ? "STOP" : "START"}
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
