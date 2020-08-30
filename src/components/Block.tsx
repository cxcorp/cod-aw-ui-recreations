import React, { FC } from 'react'
import cx from 'classnames'

import { findByType } from '../util'
import styles from './Block.module.scss'

const Before: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={cx(styles.before, className)}>
      {children}
    </div>
  )
}
Before.displayName = 'Before'

const After: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={cx(styles.after, className)}>
      {children}
    </div>
  )
}
After.displayName = 'After'

const Main: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={cx(styles.main, className)}>
      {children}
    </div>
  )
}
Main.displayName = 'Main'

type Lines = 'both' | 'left' | 'right' | 'none'

interface BlockProps {
  children: React.ReactNode
  className?: string
  lines?: Lines
  dense?: boolean
}

interface BlockStatic {
  Before: typeof Before
  After: typeof After
  Main: typeof Main
}

const Block: FC<BlockProps> & BlockStatic = ({
  className,
  children,
  lines = 'both',
  dense = false,
}) => {
  const before = findByType(children, Before)
  const after = findByType(children, After)
  const main = findByType(children, Main)

  return (
    <div
      className={cx(
        styles.block,
        {
          [styles['block--with-before']]: !!before,
          [styles['block--with-after']]: !!after,
          [styles['block--dense']]: dense,
        },
        styles[`block--lines-${lines}`],
        className
      )}
    >
      {before}
      {main}
      {after}
    </div>
  )
}

Block.Before = Before
Block.After = After
Block.Main = Main

export default Block
