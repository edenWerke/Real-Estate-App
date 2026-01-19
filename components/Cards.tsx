import icons from '@/constants/icons';
import images from '@/constants/images';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface Props{
    onPress?:()=>void;
}


export const FeaturedCard = ({onPress}:Props) => {
  return (
  <TouchableOpacity onPress={onPress} className='flex flex-col items-start w-60 h-80 relative'>
    <Image source={images.japan} className='size-full rounded-2xl'/>
    <Image source={images.cardGradient} className='size-full rounded-2xl absolute bottom-0'/>
  <View className='flex flex-row px-3 items-center bg-white/90 py-1.5 rounded-full absolute top-5 right-5'>
    <Image source={icons.star} className='size-3.5'/>
    <Text className='text-xs font-rubik-bold text-primary ml-1'>4.4</Text>
  </View>
  
  </TouchableOpacity>
  )
}

export const Card=()=>{
    return(
        <View>
            <Text>Cards</Text>
        </View>
    )
}