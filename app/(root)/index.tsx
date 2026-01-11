import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className=" font-rubik-light text-3xl color-pink-800  my-10">Welcome to realstatee</Text>
      <Text className="  text-3xl color-pink-800  my-10">Welcome to realstatee</Text>
     <Link href="/sign-in">Sign In</Link>
     <Link href="/explore">Explore</Link>
     <Link href="/profile">Profile</Link>
     <Link href="/properties/1">Property</Link>
    </View>
  );
}
