import { Text, View } from "react-native";
import SingleCurricu from "./SingleCurricu";

const kinder = require("@/assets/kinder.png");
const ele = require("@/assets/elementary.png");
const mid = require("@/assets/middle.png");

const Curriculums = () => {
  return (
    <View className="mt-10">
      <Text className="mb-5 text-center text-black font-bold text-[26px]">
        Standard Curriculum
      </Text>
      <View className="gap-3">
        <SingleCurricu
          title="Kinder (3-6) Years"
          description="Cum sociis natoque penatibus et magnis
dis parturient montes, nascetur ridiculus
mu sdis parturient"
          img={kinder}
          topColor="#DEF5FF"
          bottomColor="#FFFFFF"
          borderColor="#DEF5FF"
          LinkColor="#64C8FF"
        ></SingleCurricu>
        <SingleCurricu
          title={"Elementary School"}
          description="Cum sociis natoque penatibus et magnis
dis parturient montes, nascetur ridiculus
mu sdis parturient"
          img={ele}
          topColor="#FFF4DC"
          bottomColor="#FFFFFF"
          borderColor="#FFF4DC"
          LinkColor="#F0AA00"
        ></SingleCurricu>
        <SingleCurricu
          title="Middle (10-16) Years"
          description="Cum sociis natoque penatibus et magnis
dis parturient montes, nascetur ridiculus
mu sdis parturient"
          img={mid}
          topColor="#EEE1FF"
          bottomColor="#FFFFFF"
          borderColor="#F2E8FF"
          LinkColor="#8700FF"
        ></SingleCurricu>
      </View>
    </View>
  );
};

export default Curriculums;
