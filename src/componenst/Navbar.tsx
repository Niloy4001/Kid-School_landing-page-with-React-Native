import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Image } from "expo-image";
import { View } from "react-native";
const PlaceholderImage = require("@/assets/logo.png");
const Navbar = () => {
  return (
    <View className="h-12 flex-row justify-between items-center ">
      <Image source={PlaceholderImage} style={{ width: 46, height: 46 }} />
      <EvilIcons name="navicon" size={30} color="black" />
    </View>
  );
};

export default Navbar;
