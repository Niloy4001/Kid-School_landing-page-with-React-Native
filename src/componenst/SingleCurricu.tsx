import { Image, ImageSource } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { Text } from "react-native";


type Props = {
  title: string;
  description: string;
  img: ImageSource;
  topColor: string;
  bottomColor: string;
  borderColor: string;
  LinkColor: string;
};

const SingleCurricu = ({
  title,
  description,
  img,
  topColor,
  bottomColor,
  borderColor,
  LinkColor,
}: Props) => {
  return (
    <LinearGradient
      colors={[topColor, bottomColor]}
      style={{
        alignItems: "center",
        gap: 16,
        padding: 28,
        borderRadius: 12,
        borderWidth: 1,
        borderColor,
        //   overflow: "hidden",
      }}
    >
      <Image source={img} style={{ width: 92, height: 92 }} />
      <Text className="text-[16px] font-bold text-[#202020] text-center">
        {title}
      </Text>
      <Text className="text-[10px] font-medium text-[#808080] text-center">
        {description}
      </Text>
      <Link href={"/"}>
        <Text
          className="text-[10px] font-bold text-center"
          style={{ color: LinkColor }}
        >
          Read More
        </Text>
      </Link>
    </LinearGradient>
  );
};

export default SingleCurricu;
