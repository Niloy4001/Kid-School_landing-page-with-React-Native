import { Pressable, Text, View } from "react-native";
import SingleStory from "./SingleStory";

const story1 = require("@/assets/story-1.png");
const story2 = require("@/assets/story-2.png");
const story3 = require("@/assets/story-3.png");
const story4 = require("@/assets/story-4.png");
const story5 = require("@/assets/story-5.png");

const Stories = () => {
  return (
    <View className="mt-10">
      <Text className="mb-5 text-center text-black font-bold text-[26px]">
        Our Stories
      </Text>
      <View className="flex-row flex-wrap gap-3 justify-center">
        <SingleStory
          img={story1}
          date="November 19, 2019"
          date_bg="#95B226"
          description="Find out if a school fits the
family’s needs"
        />
        <SingleStory
          img={story2}
          date="November 19, 2019"
          date_bg="#5D58F0"
          description="Find out if a school fits the
family’s needs"
        />
        <SingleStory
          img={story3}
          date="November 19, 2019"
          date_bg="#5D58F0"
          description="Find out if a school fits the
family’s needs"
        />
        <SingleStory
          img={story4}
          date="November 19, 2019"
          date_bg="#5D58F0"
          description="Find out if a school fits the
family’s needs"
        />
        <SingleStory
          img={story1}
          date="November 19, 2019"
          date_bg="#95B226"
          description="Find out if a school fits the
family’s needs"
        />
        <SingleStory
          img={story5}
          date="November 19, 2019"
          date_bg="#95B226"
          description="Find out if a school fits the
family’s needs"
        />
      </View>
      <View className="flex-1 items-center mt-4">
        <Pressable className="w-1/2 bg-black p-1 rounded-2xl">
          <Text className="text-center text-white font-medium">View All</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Stories;
