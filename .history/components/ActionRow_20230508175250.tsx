import { View, Text } from 'react-native'

type Props = {
  title: string;
}

const ActionRow = ({ title, screen, color, requiresPro, icon, vertical }: Props) => {
  return (
    <View>
      <Text>ActionRow</Text>
    </View>
  )
}

export default ActionRow