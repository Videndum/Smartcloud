import React from 'react';
import { Text, View } from 'react-native';
import * as styles from '../assets/styles/main'
import * as globals from './global';

let remote
try { remote = require('electron').remote }catch(_){}

export function CreateHandles(props) {
  return ([
    <View key="handles" style={[styles.electron.header, {WebkitAppRegion: 'drag'}]}>
      <View key="titleContainer" style={styles.electron.titleContainer}>
        <Text key='title' style={[styles.electron.title, {WebkitAppRegion: 'no-drag', 'userSelect': 'none'}]}> Smartcloud</Text>
      </View>
      <View style={styles.electron.controlContainer}>
        <Text key='minimize' style={[styles.electron.button, {WebkitAppRegion: 'no-drag', 'userSelect': 'none'}]} onClick={minimize}>-</Text>
        <Text key='maximize' style={[styles.electron.button, {WebkitAppRegion: 'no-drag', 'userSelect': 'none'}]} onClick={minMax}>+</Text>
        <Text key='close' id='close-button' style={[styles.electron.button, {WebkitAppRegion: 'no-drag', 'userSelect': 'none'}]} onClick={shut}>x</Text>
      </View>
    </View>,
    <globals.Container/>
  ])
}

function minimize () {
  remote.getCurrentWindow().minimize()
}

function minMax () {
  const currentWindow = remote.getCurrentWindow()
  if(currentWindow.isMaximized()) {
    currentWindow.unmaximize()
  } else {
    currentWindow.maximize()
  }
}

function shut () {
  remote.app.quit()
}
