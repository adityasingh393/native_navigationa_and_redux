/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import { SafeAreaView, } from 'react-native';
import Multiply from './src/components/Multiply';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Counter from './src/components/Counter';
function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <SafeAreaView >
        <Multiply />
        <Counter />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
