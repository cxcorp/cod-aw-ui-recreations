import React from 'react'
import cx from 'classnames'

import styles from './Warnings.module.scss'

const WarningIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    x="0px"
    y="0px"
    viewBox="5 11 90 78"
  >
    <g transform="translate(0,-952.36218)">
      <path
        style={{
          textIndent: 0,
          textTransform: 'none',
          direction: 'ltr',
          baselineShift: 'baseline',
        }}
        d="m 50.000022,963.36212 c -2.7312,0 -5.22263,1.36016 -6.625,3.71875 L 6.0312719,1029.9872 c -1.40271,2.3654 -1.37507,5.2618 0.0312,7.625 1.40637,2.3632 3.88784,3.7568 6.6250001,3.75 l 74.625,0 c 2.73714,0.01 5.21866,-1.3868 6.625,-3.75 1.40634,-2.3632 1.43399,-5.2596 0.0312,-7.625 l -37.34365,-62.90633 c -1.40237,-2.35859 -3.8938,-3.71875 -6.625,-3.71875 z m 0,6 c 0.52874,0 1.2384,0.39383 1.46875,0.78125 l 37.3125,62.90633 c 0.23016,0.3881 0.23083,1.1121 0,1.5 -0.23083,0.3879 -0.93922,0.8138 -1.46875,0.8125 l -74.625,0 c -0.52953,10e-4 -1.23791,-0.4246 -1.46875,-0.8125 -0.23084,-0.3879 -0.23016,-1.1119 0,-1.5 l 37.3125,-62.90633 c 0.23035,-0.38742 0.94001,-0.78125 1.46875,-0.78125 z m -8,17 2,30.99998 12,0 2,-30.99998 -16,0 z m 8,33.99998 c -3.3137,0 -6,2.6863 -6,6.0001 0,3.3136 2.6863,6 6,6 3.3137,0 6,-2.6864 6,-6 0,-3.3138 -2.6863,-6.0001 -6,-6.0001 z"
        fillOpacity="1"
        stroke="none"
        visibility="visible"
        display="inline"
        overflow="visible"
      ></path>
    </g>
  </svg>
)

interface Props {
  className?: string
  title: string
  subtitle: string
  subsubtitle: string
}

const Warning = ({ className, title, subsubtitle, subtitle }: Props) => {
  return (
    <div className={cx(styles.container, className)}>
      <div className={styles['first-row']}>
        <div className={styles['icon-container']}>
          <WarningIcon className={styles.icon} />
        </div>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles['warning-pattern']}></div>
      </div>
      <div className={styles['second-row']}>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles['third-row']}>
        <p className={styles.subsubtitle}>{subsubtitle}</p>
      </div>
    </div>
  )
}

export default Warning
