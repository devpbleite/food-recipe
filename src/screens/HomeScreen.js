import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 50}}
      className="space-y-6 pt-14">      

      <View className="mx-4 flex-row justify-between items-center mb-2">
      <Image source={require("../../assets/image/avatar.png")} style={{height: hp(5), width: hp(5.5)}} />
      </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
