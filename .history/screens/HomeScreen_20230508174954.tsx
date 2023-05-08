import { Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import ActionRow from '../components/ActionRow';

const HomeScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-gray-100 relative'>
      {/* Scroll Zatiaľ nefunguje pre Android */}
      <ScrollView> 
        {/* PRO/UPGRADE Button */}
        <TouchableOpacity className='absolute z-50 top-5 right-10 items-center'>
          <Ionicons name="person-circle" size={30} color="#E5962D" />
          <Text className='text-center' style={{color:"#E5962D"}}>UPGRADE</Text>
        </TouchableOpacity>

        <Image 
          source={{ uri: "https://i.imgur.com/e14NE49.png" }}
          className='w-full h-64'
        />

        {/* ActionRow */}
        <ActionRow 
          title=""
        />

        {/* ActionRow */}
        {/* ActionRow */}
        {/* ActionRow */}
        {/* ActionRow */}
      
      </ScrollView>  
    </SafeAreaView>
  )
}

export default HomeScreen