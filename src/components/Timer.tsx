import { View, Text } from "react-native";

export default function Timer({time}){

    const formateTime = `${Math.floor(time / 60).toString().padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;

    return(
        <View className="flex-[0.3] justify-center bg-slate-100 rounded-3xl" >
            <Text className="text-7xl text-center p-3 font-bold">{formateTime}</Text>
        </View>
    )
}