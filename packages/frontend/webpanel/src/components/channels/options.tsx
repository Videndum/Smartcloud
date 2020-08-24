import React from 'react';
import { Platform, Text, View, Image } from 'react-native';
import * as styles from '../../assets/styles/main'

export class ChannelOptions extends React.Component {

  render() {
    return (
      <View key="ChannelOptions" style={styles.channels.options} >
        <View style={styles.global.topBar} />
      </View>
    )
  }
}
