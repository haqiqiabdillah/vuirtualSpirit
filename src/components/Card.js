import {View, Text, Dimensions, Image, StyleSheet} from 'react-native';
import React from 'react';
import CustomButton from './CustomButtons';

const WIDTH = Dimensions.get('window').width;

export default function Card({image, likes, onLikePressed, onDislikePressed}) {
  return (
    <View
      style={{
        marginVertical: 20,
        width: '100%',
        height: 0.75 * WIDTH,
        backgroundColor: '#FFF',
        borderRadius: 12,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 6,
        shadowColor: '#000',
      }}>
      <Image
        source={image}
        style={{
          width: '100%',
          height: WIDTH * 0.6,
          borderTopRightRadius: 12,
          borderTopLeftRadius: 12,
        }}
      />
      <View
        style={{
          paddingHorizontal: 14,
          flex: 1,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
          }}>
          <View style={{flex: 1}}>
            <CustomButton
              disabled
              secondary
              style={{
                width: 82,
                height: 30,
              }}
              title={`${likes} Like`}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              flex: 1,
            }}>
            <CustomButton
              primary
              style={styles.button}
              title="Like"
              onPress={onLikePressed}
            />
            <CustomButton
              danger
              style={styles.button}
              title="Dislike"
              onPress={onDislikePressed}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 30,
  },
});
