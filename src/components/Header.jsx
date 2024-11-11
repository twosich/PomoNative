import { View, Text, TouchableOpacity } from "react-native";

export default function Header({currentTime, setCurrent, isSetTime }){

    function handlePress(index){
        const newTime = index === 0 ? 25 : index === 1 ? 5: 15;
        setCurrent(index)
        isSetTime(newTime * 60)
    }
    const options = ["Pomodoro", "Short Break", "Long Break"]
    return(
        <View className="flex-row">
            {options.map((item, index) => (
                <TouchableOpacity className={`border-4 items-center rounded-xl my-4 p-2 w-1/3 
                ${currentTime !== index ? 'border-transparent' : 'border-white'}`} 
                key={index} onPress={() => handlePress(index)}>
                    
                    <Text className="text-2xl font-bold" >{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}