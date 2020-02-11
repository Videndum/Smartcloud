/*----------------------------------------------------
@Author: Jonathan A Stevens
@Company: TGT Media Ltd
@URL: http://tgtmedia.org
@Email: jonathan@tgtmedia.org
@Date Made: January 2020

TABLE OF CONTENTS

This file contents are outlined below.

  1.    Imports
  2.    Colours
  3.    Fonts
  4.    Global Styles
  5.    Electron Styles
  6.    Mobile Styles
  7.    Website Styles
  8.    Channel Styles


----------------------------------------------------------------

  1.  Imports - Import required modules

----------------------------------------------------------------*/

import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

/*----------------------------------------------------------------

  2.  Preset Color Styles - Colors to be used throughout

----------------------------------------------------------------*/

let darktheme: boolean

const darkTheme = {
  a1: '#4b428e',
  a2: '#fed52d',
  a3: '#f48633',
  a4: '#933f7b',
  a5: '#34c672',
  b1: '#2e2d3f',
  b2: '#22222d',
  b3: '#16161c',
  b4: '#0e0e11',
  b5: '#060607',
  c1: '#f7f7f7',
  c2: '#d3d3e0',
  c3: '#b7b7c4',
  c4: '#9d9daa',
  c5: '#77778c',
  d1: '#4B428E',
  d2: '#323277',
  d3: '#242466',
  d4: '#171756',
  d5: '#0A0A3F',
}

const lightTheme = {
  a1: '#4b428e',
  a2: '#fed52d',
  a3: '#f48633',
  a4: '#933f7b',
  a5: '#34c672',
  b1: '#f7f7f7',
  b2: '#d3d3e0',
  b3: '#b7b7c4',
  b4: '#9d9daa',
  b5: '#77778c',
  c1: '#2e2d3f',
  c2: '#22222d',
  c3: '#16161c',
  c4: '#0e0e11',
  c5: '#060607',
  d1: '#4B428E',
  d2: '#323277',
  d3: '#242466',
  d4: '#171756',
  d5: '#0A0A3F',
}

darktheme = true

let colours: any
if (darktheme) { colours = darkTheme} else { colours = lightTheme}
console.log("current theme is", darktheme, colours)
export {
  colours
}
/*----------------------------------------------------------------

  3.  Fonts - Fonts to be used throughout

----------------------------------------------------------------*/

export const fontList = {
  'Rubik-Black': require('../fonts/Rubik-Black.ttf'),
  'Rubik-Bold': require('../fonts/Rubik-Bold.ttf'),
  'Rubik-Light': require('../fonts/Rubik-Light.ttf'),
  'Rubik-Medium': require('../fonts/Rubik-Medium.ttf'),
  'Rubik-Regular': require('../fonts/Rubik-Regular.ttf'),
}

export const rubik = {
  black: 'Rubik-Black',
  bold: 'Rubik-Bold',
  light: 'Rubik-Light',
  medium: 'Rubik-Medium',
  regular: 'Rubik-Regular',
};

/*----------------------------------------------------------------

  4.  Global - Styles used on all applications / versions

----------------------------------------------------------------*/

export const global = StyleSheet.create({
  app:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: colours.b3,
  },
  container: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  mobile:{
    backgroundColor: colours.b1,
    paddingTop: Constants.statusBarHeight
  },
  mainContent:{
    flex: 3,
    flexGrow: 1,
    backgroundColor: colours.b1
  },
  topBar: {
    height:50,
    borderBottomWidth: 1.5,
    borderBottomColor: colours.b4,
    display: 'flex',
    marginTop: 5,
    marginBottom: 0,
  }
})

/*----------------------------------------------------------------

  5.  Electron - Styles needed for electron version to work (desktop)

----------------------------------------------------------------*/

export const electron = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    height: 20,
    backgroundColor: colours.b3,
    margin: 0,
    borderBottomWidth: 0.5,
    borderColor: colours.b5,
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexGrow: 1,
    paddingTop: 2,
  },
  controlContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: colours.a1,
    margin: 0,
    marginLeft: 5,
    fontSize: 12,
    fontFamily: rubik.black,
  },
  button: {
    width: 25,
    margin: 0,
    marginLeft: 10,
    color: colours.a1,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: rubik.black,
  }
})

/*----------------------------------------------------------------

  6.  Mobile - Styles needed for mobile versions to work

----------------------------------------------------------------*/

export const mobile = StyleSheet.create({
  title: {
    color: colours.a1,
    margin: 0,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: rubik.black,
  }
})

/*----------------------------------------------------------------

  7.  Web - Styles needed for mobile versions to work

----------------------------------------------------------------*/

export const website = StyleSheet.create({
  title: {
    color: colours.a1,
    margin: 0,
    marginLeft: 5,
    fontSize: 12,
    fontFamily: rubik.black,
  }
})

/*----------------------------------------------------------------

  8.  Channel Styles - styles for the channel select and options

----------------------------------------------------------------*/

export const channels = StyleSheet.create({
  Container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    maxWidth: 385,
    width: '80%',
    padding: 0,
    margin: 0,
    backgroundColor: colours.b3,
  },
  Select:{
    width: 80,
    margin: 0,
  },
  options: {
    flex: 1,
    maxWidth: 300,
    borderTopLeftRadius: 10,
    backgroundColor: colours.b2,
  },
  icon: {
    height: 40,
    width: 40,
    alignSelf:'center',
    alignContent:'center',
    textAlign: 'center',
    borderRadius: 30,
    marginTop: 0,
    marginBottom: 10,
    backgroundColor: colours.b1,
  },
  iconSelected: {
    height: 40,
    width: 40,
    alignSelf:'center',
    borderRadius: 15,
    marginTop: 0,
    marginBottom: 10,
    backgroundColor: colours.d2,
  }
})
