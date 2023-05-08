import { Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      {/* PRO/UPGRADE Button */}
      <TouchableOpacity>
        <Text>PRO/UPGRADE
        </Text>
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