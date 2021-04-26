import React, {Component} from 'react';
import {Text, View} from 'react-native';

// class App extends Component {
//     render() {
//         return (
//             <View>
//                 <Text>hello ban tuyen</Text>
//             </View>
//         );
//     }
// }

const App = () => {
    return (
        <View style={{marginTop: 50}}>
          <View>
            <Text>hello ban 1</Text>
          </View>
          <View>
            <Text>hello ban 2</Text>
          </View>
        </View>
    );
};

export default App;
