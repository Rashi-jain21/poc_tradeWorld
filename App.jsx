/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ImageMapper from './ImageMapper';
import App1 from './App1';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [showFirstScreen, setShowFirstScreen] = useState(true);

  const imageSource = require('./images/images.jpeg');
  const MAPPING = [
    {
      id: '0',
      name: 'First Area Name',
      shape: 'rectangle',
      width: 30,
      height: 40,
      x1: 300,
      y1: 40,
      prefill: 'red',
      fill: 'blue',
    },
    {
      id: '1',
      name: 'Second Area Name',
      shape: 'rectangle',
      x2: 155,
      y2: 540,
      x1: 125,
      y1: 500,
      prefill: 'green',
      fill: 'yellow',
    },
  ];
  onAnyAreaPress = (item, idx, event) => {
    setShowFirstScreen(false);
    // console.log('item, idx, event', item, idx, event);
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {showFirstScreen ? (
        <ScrollView pinchGestureEnabled>
          <ImageMapper
            imgHeight={1500}
            imgWidth={500}
            imgSource={imageSource}
            imgMap={MAPPING}
            onPress={(item, idx, event) => onAnyAreaPress(item, idx, event)}
            containerStyle={{borderColor: 'green', borderWidth: 1, flex: 1}}
            selectedAreaId="my_area_id"
          />
        </ScrollView>
      ) : (
        <App1 onPress={setShowFirstScreen} />
      )}
    </SafeAreaView>
  );
}

export default App;
