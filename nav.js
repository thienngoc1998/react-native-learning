import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Navigation = (props) => {
  return (
    <View style={styles.nav}>
      <Text>My App</Text>
      <Text>{props.nameNav}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  nav: {
    backgroundColor: 'red',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
});

export default Navigation;
