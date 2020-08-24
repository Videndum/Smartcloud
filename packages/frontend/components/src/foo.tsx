/**
 * @class Foo
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

export default class Foo extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    //@ts-ignore
    const { text } = this.props

    return <div className={styles.foo}>Component Foo: {text}</div>
  }
}
