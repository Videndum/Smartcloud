import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat'
export class Example extends React.Component {
  state = {
    messages: [],
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello user, how can we help you today?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 2,
          text: 'This is a demo of the support chat which will be intergrated into our application, you can find out more by contacting info@tgtmedia.org',
          system: true,
          // Any additional custom parameters are passed through
        },
        {
          _id: 3,
          text: 'Welcome to smartcloud.gg',
          system: true,
          // Any additional custom parameters are passed through
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}
