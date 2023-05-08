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
    <TouchableOpacity 
      className={`flex flex-1 flex-row justify-center items-center py-5 rounded-lg space-x-2 ${vertical ? "flex-col : "flex-"}`} 
      style={{ backgroundColor: color }}>
      <Ionicons name={icon} size={30} color="white" />
      <Text className='text-white font-bold text-lg'>{title}</Text>
    </TouchableOpacity>
  )
}

export default ActionRow