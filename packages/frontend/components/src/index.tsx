import * as React from 'react'
import styles from './styles.module.css'
import Foo from './Foo'
import Bar from './Bar'

export { Foo, Bar }
export default { Foo, Bar }

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
