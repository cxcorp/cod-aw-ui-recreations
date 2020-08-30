import React, { FC } from 'react'
import cx from 'classnames'

import styles from './TitlePlate.module.scss'

const TitlePlate: FC<{
  as?:
    | React.ComponentType<{ className?: string }>
    | React.ElementType<{ className?: string }>
  className?: string
  style?: React.CSSProperties
}> = ({ as: As = 'span', className, style, children }) => {
  return (
    <As style={style} className={cx(styles.title, className)}>
      {children}
    </As>
  )
}

export default TitlePlate
