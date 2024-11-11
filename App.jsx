import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { useState } from 'react';
import "./global.css"
import Header from './src/components/Header';
import Timer from './src/components/Timer';

export default function App() {

  const colors = ["bg-emerald-400", "bg-violet-400", "bg-orange-400"]

  const [isWork, isSetWorking] = useState(false)
  const [time, isSetTime] = useState(25 * 60)
  const [currentTime, setCurrent] = useState("POMO" | "SHORT" | "BREAK")

  return (
    <View className={`flex-1 px-5 pt-10 w-full h-screen ${colors[currentTime]}`}>
      <Text className="text-3xl font-bold">Pomodoro</Text>
      <Header currentTime={currentTime} setCurrent={setCurrent} isSetTime={isSetTime} />
      <Timer time={time} />
      <StatusBar style='auto' />
    </View>
  );
}
