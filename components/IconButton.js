import { Image, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({ onPress, iconName, customButtonStyle, customIconStyle }) {
  return (
    <Pressable
      style={[
        iconButtonStyle.buttonStyle,
        customButtonStyle,
        ({ pressed }) => {
          pressed && iconButtonStyle.pressed;
        },
      ]}
      onPress={onPress}
    >
      <Ionicons name={iconName} style={[iconButtonStyle.iconStyle, customIconStyle]} />
    </Pressable>
  );
}

export default IconButton;

const iconButtonStyle = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  buttonStyle: {
    backgroundColor: 'transparent',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
