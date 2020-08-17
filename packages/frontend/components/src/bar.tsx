/**
 * @class Bar
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

export default class Bar extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    //@ts-ignore
    const { text } = this.props

    return <div className={styles.bar}>Component Bar: {text}</div>
  }
}
