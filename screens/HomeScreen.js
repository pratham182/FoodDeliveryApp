import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {View,Text, TextInput, ScrollView} from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';

import * as Icon from "react-native-feather";
import { themeColors } from '../themes';
import Categories from '../components/Categories';
const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
    <StatusBar barStyle="dark-content" />

    <View className="flex-row items-center space-x-2 px-4 pb-2 w-full">
      <View className="flex-row items-center 
      p-3 rounded-full border border-gray-300 flex-1 mr-1"

      >
        
        <Icon.Search height={25} width={25} stroke="gray" />

        <TextInput
          placeholder="Enter Restaurant"
          className="ml-2"
          style={{ flex: 1 }}
        />

        <View className="flex-row items-center space-x-1 border-l-2 pl-2 border-gray-300 flex-shrink">
          <Icon.MapPin height={20} width={20} stroke="gray" />
          <Text className="text-gray-600" numberOfLines={1} ellipsizeMode="tail">
            Hisar Haryana
          </Text>
        </View>
        



      </View>
      <View style={{
        backgroundColor:themeColors.bgColor(1)
      }} className="p-3 rounded-full"> 
        <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white"/>

        
      </View>
    </View>

<ScrollView
 showsVerticalScrollIndicator={false}
 contentContainerStyle={{
    paddingBottom:20
 }}
>

<Categories/>

</ScrollView>

 
  </SafeAreaView>

  )
}

export default HomeScreen
