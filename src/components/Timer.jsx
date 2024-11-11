import { View, Text } from "react-native";

export default function Timer({time}){
    return(
        <View className="flex-[0.3] justify-center bg-slate-100 rounded-xl" >
            <Text className="text-2xl p-3 font-semibold">{time}</Text>
        </View>
    )
}