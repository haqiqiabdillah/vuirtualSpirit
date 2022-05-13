import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const CustomButton = ({
  title,
  onPress,
  style,
  primary,
  secondary,
  danger,
  disabled,
}) => {
  const getBgColor = () => {
    if (primary) {
      return '#2B72C4';
    }
    if (secondary) {
      return '#FFFFFF';
    }
    if (danger) {
      return '#DB2C2C';
    }
  };

  const getColor = () => {
    if (primary || danger) {
      return '#FFFFFF';
    }
    if (secondary) {
      return '#5F5F5F';
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.buttonContainer,
        {
          backgroundColor: getBgColor(),
          shadowColor: '#000',
          borderRadius: 8,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 6,
        },
        style,
      ]}>
      <Text
        style={{
          fontSize: 16,
          color: getColor(),
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomButton;
