import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const AppText = (props) => {
  return (
    <Text
      {...props}
      numberOfLines={props.numberOfLines}
      style={[styles.text , props.txtStyle]}
      >
      {props.children}
    </Text>
  );
};

export default AppText;
