import Banner from "@/componenst/Banner";
import Curriculums from "@/componenst/Curriculums";
import Footer from "@/componenst/Footer";
import Navbar from "@/componenst/Navbar";
import Stories from "@/componenst/Stories";
import { ScrollView, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 p-2">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* navbar */}
        <View className="border-b-[1px] border-orange-500 pb-3">
          <Navbar />
        </View>
        {/* banner */}
        <Banner />
        <Curriculums />
        <Stories />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}
