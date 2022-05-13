import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import Card from './src/components/Card';
import CustomButton from './src/components/CustomButtons';

const initData = [
  {
    id: 1,
    image: require('./src/assets/Image1.png'),
    likes: 0,
  },
  {
    id: 2,
    image: require('./src/assets/Image2.png'),
    likes: 0,
  },
  {
    id: 3,
    image: require('./src/assets/Image3.png'),
    likes: 0,
  },
];

const App = () => {
  const flatListRef = React.useRef();
  const [data, setData] = React.useState(initData);

  const onLikePressed = item => {
    let id = item.id;
    let objIndex = data.findIndex(obj => obj.id == id);
    data[objIndex].likes++;
    setData([...data]);
  };

  const onDislikePressed = item => {
    let id = item.id;
    let objIndex = data.findIndex(obj => obj.id == id);
    if (data[objIndex].likes > 0) {
      data[objIndex].likes--;
      setData([...data]);
    }
  };

  const onReset = () => {
    let reset = [];

    data.forEach(item => {
      reset.push({
        id: item.id,
        image: item.image,
        likes: 0,
      });
    });
    setData(reset);
  };

  const onDislikeAll = () => {
    data.forEach(item => {
      if (item.likes > 0) {
        item.likes--;
      }
    });
    setData([...data]);
    console.log(data);
  };

  const onLikeAll = () => {
    data.forEach(item => {
      item.likes++;
    });
    setData([...data]);
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <CustomButton
          primary
          style={styles.buttonMedium}
          title="Like All"
          onPress={onLikeAll}
        />
        <CustomButton
          secondary
          style={styles.buttonMedium}
          title="Reset All"
          onPress={onReset}
        />
        <CustomButton
          danger
          style={styles.buttonMedium}
          title="Dislike All"
          onPress={onDislikeAll}
        />
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => (
          <Card
            image={item.image}
            likes={item.likes}
            onLikePressed={() => onLikePressed(item)}
            onDislikePressed={() => onDislikePressed(item)}
          />
        )}
        ref={flatListRef}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingVertical: 15,
    paddingHorizontal: 12,
  },
  buttonMedium: {
    width: 100,
    height: 36,
  },
});

export default App;
