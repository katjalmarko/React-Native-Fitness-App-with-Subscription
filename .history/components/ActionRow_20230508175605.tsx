import { TouchableOpacity, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

type Props = {
  title: string;
  screen: any;
  color: string;
  requiresPro?: boolean;
  icon?: any;
  vertical?: boolean;
};

const ActionRow = ({ title, screen, color, requiresPro, icon, vertical }: Props) => {
  return (
    <TouchableOpacity>
      <Ionicons name="person-circle" size={30} color="white" />
      <Text>ActionRow</Text>
    </TouchableOpacity>
  )
}

export default ActionRow