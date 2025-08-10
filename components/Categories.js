import React, { useState } from 'react'

import {View,Text, ScrollView, TouchableOpacity, Image} from "react-native"
import { categories } from '../constants'
const Categories = () => {
  const [activeCategory,setActiveCategory]=useState(null);
  return (
  <View className="mt-4">
    <ScrollView horizontal
    
    showsHorizontalScrollIndicator={false}
    className="overflow-visible"
    contentContainerStyle={{
      paddingHorizontal:13
    }}
    >

      {
        categories.map((item,index)=>{
          let isActive=item.id===activeCategory;
          let btnClass=isActive ? 'bg-gray-600':'bg-gray-200';
          let textClass=isActive?'font-semibold text-gray-800':'text-gray-500';
          return(<>
          
          <View key={index}
          className="flex justify-center items-center mr-6"
          >
            <TouchableOpacity className={"p-1 rounded-full shadow bg-gray-200"+btnClass}
            onPress={()=>setActiveCategory(item?.id)}
            >
              <Image
              style={{
                width:45,height:45
              }}
              source={item.image}
              />
              

            </TouchableOpacity>

            <Text  className={"text-sm"+textClass}>
                {item?.name}
              </Text>

          </View>
          </>)
        })
      }

    </ScrollView>
   
  </View>
  )
}

export default Categories
