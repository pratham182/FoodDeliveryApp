import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { themeColors } from '../themes'
import ResturantCard from './ResturantCard'

const FeaturedRow = ({title,description,resturants}) => {
  return (
    <View>
        <View className="flex-row justify-between items-center px-4">

          <View>

            <Text className="font-bold text-lg">
             {title}
            </Text>
            <Text className="text-gray-500 text-xs">
              {description}

            </Text>
            </View>

            <TouchableOpacity>
              <Text style={{color:themeColors.text}}
              className="font-semibold"
              >

                See All

              </Text>
            </TouchableOpacity>
          

        </View>

 
        <ScrollView horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal:15
        }}

        className="overflow-visible py-5"
        >

          {resturants?.map((restaurant,index)=>{
            return(<ResturantCard
            item={restaurant}
            key={index}
            />)
          })}


        </ScrollView>
    </View>
  )
}

export default FeaturedRow
