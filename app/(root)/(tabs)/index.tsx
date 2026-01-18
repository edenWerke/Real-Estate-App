import images from "@/constants/images";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
     
    >
      <View className="px-5">
    <View className="flex flex-row items-center justify-between mt-5"></View >
     <View className="flex flex-row items-center">
      <Image source={images.avatar} />
     </View>
     
     
      <Text></Text>
     </View>
    </SafeAreaView>
  );
}
