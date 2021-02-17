import React, { memo } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { getStatusBarHeight } from 'react-native-status-bar-height';

// type Props = {
//   goBack: () => void;
// };

const BackButton = ({ goBack }) => (
  <TouchableOpacity onPress={goBack} style={styles.container}>
    <IconButton
      icon='reload'
      color='grey'
      size={25}
      // style={[styles.buttonBot, styles.reload]}
      onPress={() => console.log('reload')}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 10,
  },
});

export default memo(BackButton);
