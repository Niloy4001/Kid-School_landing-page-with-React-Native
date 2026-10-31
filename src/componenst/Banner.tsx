import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";
const bannerImg = require("@/assets/hero-kids.png");

const Banner = () => {
  return (
    <View className="mt-7">
      <View>
        <Image source={bannerImg} style={{ width: "100%", height: 413 }} />
      </View>
      <View className="text-center">
        <Text className="text-[#FEA301] text-[32px] text-center">
          Empowering
        </Text>
        <Text className="text-[32px] text-center">students from small</Text>
        <View className="flex-row">
          <Text className="text-[32px] text-center">age </Text>
          <Text className="text-[#01ACFD] text-[32px] text-center">
            towards vision
          </Text>
        </View>
        <Text className="mt-2 text-center text-[14px]">
          With the courage, Confidence, Creativity and Compassion to make their
          Unique Contribution in a Diverse and Dynamic World.
        </Text>
        <View className="w-full items-center mt-4">
          <Pressable className="bg-black w-1/3 p-2 rounded-md">
            <Text className="text-white text-center">Enroll Now</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Banner;
