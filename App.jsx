import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import "./global.css"
import Header from './src/components/Header';
import Timer from './src/components/Timer';

export default function App() {

  const colors = ["bg-emerald-400", "bg-violet-400", "bg-orange-400"]
  const [isActive, setIsActive] = useState(false)
  const [isWork, isSetWorking] = useState(false)
  const [time, isSetTime] = useState(25 * 60)
  const [currentTime, setCurrent] = useState("POMO" | "SHORT" | "BREAK")

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        isSetTime(time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (time === 0) {
      setIsActive(false);
      isSetWorking(!isWork);
      isSetTime(isSetWorking ? 300 : 1500);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  function handleActive(){
    setIsActive(!isActive)
  }

  return (
    <View className={`flex-1 px-5 pt-24 w-full h-screen ${colors[currentTime]}`}>
      <Text className="text-6xl font-bold">Pomodoro</Text>
      <Header currentTime={currentTime} setCurrent={setCurrent} isSetTime={isSetTime} />
      <Timer time={time} />
      <TouchableOpacity className="pt-5" onPress={handleActive}>
        <Text className="text-center text-slate-100 text-4xl bg-black py-3 font-bold rounded-2xl">{isActive ? "STOP" : "START" }</Text>
      </TouchableOpacity>
      <StatusBar style='auto' />
    </View>
  );
} 