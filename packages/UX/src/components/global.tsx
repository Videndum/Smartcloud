import React from 'react';
import { Platform, Text, View, Image, Dimensions } from 'react-native';
import * as styles from '../assets/styles/main'
import { Example } from './chat/example'
import { ChannelSelect } from './channels/select'
import { ChannelOptions } from './channels/options'

// let remote, win
// try { remote = require('electron').remote }catch(_){}
// try { win = remote.getCurrentWindow() }catch(_){}

export class Container extends React.Component {
  state = {
    showMenu: false,
    style: {},
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  }

  handler = (dims:any) => this.setState(dims);
  height = () => {
      this.setState({height: Dimensions.get("window").height, width: Dimensions.get("window").width});
  };


  constructor (props) {
    super(props);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.TopBar = this.TopBar.bind(this);
  }

  componentDidMount() {
    Dimensions.addEventListener("change", this.height);
    // win.on("will-resize", this.logger)
    if (Platform.OS !== 'web') {
      this.setState({
        style: {position: 'absolute', zIndex: 2, left: 0, top: 0, borderRightWidth: 3, borderColor: styles.colours.b5}
      })
    }
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.handler);
  }

  async handleToggleClick (){
    if (this.state.showMenu) {
      this.setState({showMenu: false})
    } else {
      this.setState({showMenu: true })
    }
  }

  TopBar (props) {
    return (
      <View key="ChannelContentTopBar" style={styles.global.topBar} >
      {
        Platform.OS!=='web' ? ([
          <View onTouchEnd={this.handleToggleClick} style={{flex: 1, marginLeft: 10, alignContent: 'flex-start', justifyContent: 'flex-start'}}>
            <Image source={require('../assets/img/icon.png')} style={{height:50, width:50}}/>
          </View>,
          <View style={{flex: 3, alignContent: 'center', justifyContent: 'center'}}>
            <Image source={require('../assets/img/logo_sub.png')} style={{height:30, width: 150, alignSelf: 'center'}}/>
          </View>,
          <View style={{flex: 1, alignContent: 'flex-end', justifyContent: 'flex-end'}} />
        ]) : null
      }
      </View>
    )
  }

  render() {
    let contain =  {maxHeight:  this.state.height, maxWidth:  this.state.width}
    if (Platform.OS=='web') {contain = {maxHeight:  this.state.height, maxWidth:  this.state.width}}
    return (
      <View key="container" style={[styles.global.container, contain]}>
       { this.state.showMenu || Platform.OS=='web' ?  ( [
         <View key="selectContainer" style={[styles.channels.Container, this.state.style]}>
            <ChannelSelect />
            <ChannelOptions />
        </View>
      ]) : null }
      {
        this.state.showMenu && Platform.OS!=='web' ? (
          <View key="mainContent" style={styles.global.mainContent} onTouchEnd={this.handleToggleClick}>
            <this.TopBar />
            <Example />
          </View>
        ) : (
          <View key="mainContent" style={styles.global.mainContent}>
            <this.TopBar />
            <Example />
          </View>
        )
      }
      </View>
    )
  }
}
