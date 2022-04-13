import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const AppText = ({
 props,
children,
style,
numberOfLines
}) => {
  return (
    <Text
      {...props}
      numberOfLines={numberOfLines}
      style={styles.text , style}
      >
      {children}
    </Text>
  );
};

export default AppText;
