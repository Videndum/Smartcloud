import React from 'react';
import { Platform, View } from 'react-native';
import * as Font from 'expo-font';
import * as styles from './src/assets/styles/main'
// @ts-ignore
import * as handles from './src/components/handles';
import * as globals from './src/components/global';
import * as Sentry from '@sentry/browser';
Sentry.init({
    dsn: 'https://9288fafab265415fa83582b692afa0cf@sentry.io/1404931',
    beforeSend(event, hint) {
      // Check if it is an exception, and if so, show the report dialog
      if (event.exception) {
        Sentry.showReportDialog({ eventId: event.event_id });
      }
      return event;
    }
  });


export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
   await Font.loadAsync(styles.fontList);
   this.setState({ fontLoaded: true });
 }
  render() {
    return (
      this.state.fontLoaded ? (
        <View style={styles.global.app}>
          {Platform.OS=='web' && process.versions.electron ? (
            <handles.CreateHandles />
          ) : <globals.Container/>}
        </View>
      ) : null
    );
  }
}
