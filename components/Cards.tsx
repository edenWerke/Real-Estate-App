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