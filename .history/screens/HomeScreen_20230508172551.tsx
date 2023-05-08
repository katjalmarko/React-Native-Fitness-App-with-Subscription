import { Text, SafeAreaView, Image } from 'react-native'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text 
        className='text-center p-10 bg-blue-400'>
          This is the HomeScreen!
      </Text>

      {/* PRO/UPGRADE Button */}

      {/* Image */}
      <Image 
        source={{ uri: "https://i.imgur.com/e14" }}
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