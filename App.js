import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Main from 'src/main'
import { Provider } from 'react-redux'
import store from 'src/redux/store'

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Main />
      </Provider>
    </NavigationContainer>

  );
};


export default App;
