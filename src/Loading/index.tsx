import React, { useEffect, useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [dotLoadingOne] = useState(new Animated.Value(300));
  const [dotLoadingTwo] = useState(new Animated.Value(300));
  const [dotLoadingTree] = useState(new Animated.Value(300));

  const onPressTiming = ({ height = 250, duration = 250 }) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(dotLoadingOne, {
          useNativeDriver: true,
          toValue: height,
          duration,
        }),
        Animated.timing(dotLoadingOne, {
          useNativeDriver: true,
          toValue: 310,
          duration,
        }),
        Animated.timing(dotLoadingOne, {
          useNativeDriver: true,
          toValue: 300,
          duration: duration - 50,
        }),
        Animated.timing(dotLoadingTwo, {
          useNativeDriver: true,
          toValue: height,
          duration,
        }),
        Animated.timing(dotLoadingTwo, {
          useNativeDriver: true,
          toValue: 310,
          duration,
        }),
        Animated.timing(dotLoadingTwo, {
          useNativeDriver: true,
          toValue: 300,
          duration: duration - 50,
        }),
        Animated.timing(dotLoadingTree, {
          useNativeDriver: true,
          toValue: height,
          duration,
        }),
        Animated.timing(dotLoadingTree, {
          useNativeDriver: true,
          toValue: 310,
          duration,
        }),
        Animated.timing(dotLoadingTree, {
          useNativeDriver: true,
          toValue: 300,
          duration: duration - 50,
        }),
      ]),
      {
        iterations: 100,
      },
    ).start();
  };

  useEffect(() => {
    onPressTiming({});
  }, [loading, onPressTiming]);

  if (loading) {
    return (
      <>
        <View
          style={{
            flex: 1,
            backgroundColor: '#0e8dcc',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Animated.View
            style={{
              backgroundColor: '#fff',
              height: 10,
              width: 10,
              borderRadius: 5,
              transform: [{ translateY: dotLoadingOne }],
            }}
          />

          <Animated.View
            style={{
              backgroundColor: '#fff',
              height: 10,
              width: 10,
              borderRadius: 5,
              transform: [{ translateY: dotLoadingTwo }],
            }}
          />

          <Animated.View
            style={{
              backgroundColor: '#fff',
              height: 10,
              width: 10,
              borderRadius: 5,
              transform: [{ translateY: dotLoadingTree }],
            }}
          />
        </View>
        <View style={{ flex: 1, backgroundColor: 'yellow' }}>
          <TouchableOpacity onPress={() => setLoading(!loading)}>
            <Text>parar loading</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
      }}
    >
      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <TouchableOpacity onPress={() => setLoading(!loading)}>
          <Text>Iniciar loading</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ball: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 32,
  },
});
export default App;
