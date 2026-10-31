import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, View } from "react-native";

const img = require("@/assets/logo.png");
const i1 = require("@/assets/fb.png");
const i2 = require("@/assets/dribble.png");
const i3 = require("@/assets/twitter.png");
const i4 = require("@/assets/google+.png");

const Footer = () => {
  return (
    <View className="bg-[#01ACFD] py-12">
      <View className="px-4">
        <View className="flex-row gap-3 mb-4">
          <Image source={img} style={{ width: 65, height: 65 }} />
          <View>
            <Text className="text-white text-4xl font-bold">Kids</Text>
            <Text className="text-white text-4xl font-bold">Education</Text>
          </View>
        </View>
        <Text className="mb-4 text-white text-[16px] font-normal">
          Pizza ipsum dolor meat lovers buffalo. Deep dolor roll melted bacon
          Bianca pan bacon pineapple Aussie. Mayo rib sauce Hawaiian meatball.
        </Text>
        <View className="mb-4">
          <Text className="text-white text-xl font-semibold mb-3">
            About School
          </Text>
          <Link href={"/"} className=" font-medium mb-2">
            <Text className="text-white text-[16px]">Home</Text>
          </Link>
          <Link href={"/"} className=" font-medium mb-2">
            <Text className="text-white text-[16px]">About</Text>
          </Link>
          <Link href={"/"} className=" font-medium mb-2">
            <Text className="text-white text-[16px]">Facilities</Text>
          </Link>
          <Link href={"/"} className=" font-medium ">
            <Text className="text-white text-[16px] ">Admission</Text>
          </Link>
        </View>
        <Text className="text-white text-[22px] font-bold mb-4">
          Keep In Touch
        </Text>
        <View className="flex-row gap-2 mt-4">
          <Image source={i1} style={{ width: 34, height: 34 }} />
          <Image source={i2} style={{ width: 34, height: 34 }} />
          <Image source={i3} style={{ width: 34, height: 34 }} />
          <Image source={i4} style={{ width: 34, height: 34 }} />
        </View>
      </View>
    </View>
  );
};

export default Footer;
