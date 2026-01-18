import icons from '@/constants/icons';
import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Image, TextInput, View } from 'react-native';

const Search = () => {
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  return (
    <View className="flex flex-row items-center justify-between w-full px-4 rounded-lg border border-primary-100 mt-5 py-2">
      <View className="flex-1 flex flex-row items-center justify-start z-50">
        <Image source={icons.search} className='size-5'/>
      <TextInput />
      </View>
    </View>
  );
};

export default Search;
