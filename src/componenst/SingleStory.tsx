import { Image, ImageSource } from "expo-image";
import { Text, View } from "react-native";

type Props = {
  img: ImageSource;
  date: string;
  date_bg: string;
  description: string;
};

const SingleStory = ({ img, date, date_bg, description }: Props) => {
  return (
    <View className="w-[48%]  bg-white rounded-xl">
      <View>
        <Image
          source={img}
          style={{
            width: "100%",
            height: 105,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
        />
        <View
          className=" px-2 py-1 w-2/3 absolute bottom-0 left-2"
          style={{
            backgroundColor: date_bg,
            borderRadius: 50,
          }}
        >
          <Text className="text-white text-[9px] font-medium">{date}</Text>
        </View>
      </View>
      <Text className="mt-2 p-3 text-black text-[9px] font-bold">
        {description}
      </Text>
    </View>
  );
};

export default SingleStory;
