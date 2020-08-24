import React from 'react';
import {FlatList, Text, Button, View, Platform } from 'react-native';
import * as styles from '../../assets/styles/main'

export class ChannelSelect extends React.Component {
  render() {
    return (
      <View key="ChannelSelect" style={styles.channels.Select}>
        <TopBar/>
        <Channel/>
      </View>
    )
  }
}

const extractKey = ({ id }) => id

class TopBar extends React.Component {
  render() {
    return (
      <View style={styles.global.topBar}>
        <Text style={[styles.channels.icon, {backgroundColor:styles.colours.d2}]}/>
      </View>
    );
  }
}

class Channel extends React.Component {

  state = {
    style: {},
    dataSource: [
      { id: 0,  text: 0, isSelect: false, selectedClass: styles.channels.icon},
      { id: 1,  text: 1, isSelect: false, selectedClass: styles.channels.icon},
      { id: 2,  text: 2, isSelect: false, selectedClass: styles.channels.icon},
      { id: 3,  text: 3, isSelect: false, selectedClass: styles.channels.icon},
      { id: 4,  text: 4, isSelect: false, selectedClass: styles.channels.icon},
      { id: 5,  text: 5, isSelect: false, selectedClass: styles.channels.icon},
      { id: 6,  text: 6, isSelect: false, selectedClass: styles.channels.icon},
      { id: 7,  text: 7, isSelect: false, selectedClass: styles.channels.icon},
      { id: 8,  text: 8, isSelect: false, selectedClass: styles.channels.icon},
      { id: 10, text: 10, isSelect:false, selectedClass: styles.channels.icon},
      { id: 11, text: 11, isSelect:false, selectedClass: styles.channels.icon},
      { id: 12, text: 12, isSelect:false, selectedClass: styles.channels.icon},
      { id: 13, text: 13, isSelect:false, selectedClass: styles.channels.icon},
      { id: 14, text: 14, isSelect:false, selectedClass: styles.channels.icon},
      { id: 15, text: 15, isSelect:false, selectedClass: styles.channels.icon},
      { id: 16, text: 16, isSelect:false, selectedClass: styles.channels.icon},
      { id: 17, text: 17, isSelect:false, selectedClass: styles.channels.icon},
      { id: 18, text: 18, isSelect:false, selectedClass: styles.channels.icon},
      { id: 19, text: 19, isSelect:false, selectedClass: styles.channels.icon},
      { id: 20, text: 20, isSelect:false, selectedClass: styles.channels.icon},
      { id: 21, text: 21, isSelect:false, selectedClass: styles.channels.icon},
      { id: 22, text: 22, isSelect:false, selectedClass: styles.channels.icon},
      { id: 23, text: 23, isSelect:false, selectedClass: styles.channels.icon},
      { id: 24, text: 24, isSelect:false, selectedClass: styles.channels.icon},
      { id: 25, text: 25, isSelect:false, selectedClass: styles.channels.icon},
      { id: 26, text: 26, isSelect:false, selectedClass: styles.channels.icon},
      { id: 27, text: 27, isSelect:false, selectedClass: styles.channels.icon},
      { id: 28, text: 28, isSelect:false, selectedClass: styles.channels.icon},
      { id: 29, text: 29, isSelect:false, selectedClass: styles.channels.icon},
      { id: 30, text: 30, isSelect:false, selectedClass: styles.channels.icon},
      { id: 31, text: 31, isSelect:false, selectedClass: styles.channels.icon},
      { id: 32, text: 32, isSelect:false, selectedClass: styles.channels.icon},
      { id: 33, text: 33, isSelect:false, selectedClass: styles.channels.icon},
      { id: 34, text: 34, isSelect:false, selectedClass: styles.channels.icon},
      { id: 35, text: 35, isSelect:false, selectedClass: styles.channels.icon},
      { id: 36, text: 36, isSelect:false, selectedClass: styles.channels.icon},
      { id: 37, text: 37, isSelect:false, selectedClass: styles.channels.icon},
      { id: 38, text: 38, isSelect:false, selectedClass: styles.channels.icon},
    ]
  }

  renderItem = (data: any) => {
    return (
      <Text style={[styles.channels.icon, data.item.selectedClass]} onMouseEnter={() => this.hoverStyle(data)} onMouseLeave={() => this.hoverStyle(data)} onPress={() => this.hoverStyle(data)}>
      {data.item.text}
      </Text>
    )
  }

  hoverStyle = (data: any) => {
    data.item.isSelect = !data.item.isSelect;
    data.item.selectedClass = data.item.isSelect ? styles.channels.iconSelected: styles.channels.icon;
    const index = this.state.dataSource.findIndex(
       item => data.item.id === item.id
    );
    this.state.dataSource[index] = data.item;
    this.setState({
       dataSource: this.state.dataSource
    });
  };

  render() {
    return (
      <FlatList
        style={{flex: 1, marginTop: 10, height: '100%',}}
        data={this.state.dataSource}
        renderItem={item => this.renderItem(item)}
        keyExtractor={item => extractKey(item)}
        extraData={this.state}
      />
    );
  }
}
