import { Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-gray-'>
      {/* PRO/UPGRADE Button */}
      <TouchableOpacity className='absolute z-50 top-5 right-10 items-center'>
        <Ionicons name="person-circle" size={24} color="black" />
        <Text>PRO/UPGRADE</Text>
      </TouchableOpacity>

      <Image 
        source={{ uri: "https://i.imgur.com/e14NE49.png" }}
        className='w-full h-64'
      />

      {/* ActionRow */}
      {/* ActionRow */}
      {/* ActionRow */}
      {/* ActionRow */}
      {/* ActionRow */}
      
    </SafeAreaView>
  )
}

export default HomeScreen