import React, { FC } from 'react'
import cx from 'classnames'

import styles from './TitleGroup.module.scss'

const TitleGroup: FC<{
  className?: string
  heading: string
  title: string
  subtitle: string
}> = ({ className, heading, title, subtitle }) => {
  return (
    <div className={cx(styles.container, className)}>
      <h1 className={cx(styles.heading)}>{heading}</h1>
      <h2 className={cx(styles.title)}>{title}</h2>
      <h3 className={cx(styles.subtitle)}>{subtitle}</h3>
    </div>
  )
}

export default TitleGroup
