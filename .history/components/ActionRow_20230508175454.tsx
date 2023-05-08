import { TouchableOpacity, Text } from 'react-native'

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
      <Text>ActionRow</Text>
    </TouchableOpacity>
  )
}

export default ActionRow