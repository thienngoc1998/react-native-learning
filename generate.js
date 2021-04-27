import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';

const Generate = (props) => (
  <TouchableHighlight onPress={() => alert('da nhan')} underlayColor="red">
    <View style={styles.generate}>
      <Text style={{color: '#fff'}}>Add number</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  generate: {
    backgroundColor: '#00BCD4',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
});

export default Generate;
