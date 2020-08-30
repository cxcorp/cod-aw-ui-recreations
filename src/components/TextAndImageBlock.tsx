import React, { FC } from 'react'
import cx from 'classnames'

import Block from './Block'
import TitlePlate from './TitlePlate'
import styles from './TextAndImageBlock.module.scss'

interface Props {
  children: React.ReactNode
  image: React.ReactElement
  imageLabel?: string
  className?: string
}

const TextAndImageBlock: FC<Props> = ({
  className,
  children,
  image,
  imageLabel,
}) => {
  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.main}>{children}</div>
      <div className={styles['image-block']}>
        <Block dense>
          <Block.Main>
            {React.cloneElement(image, {
              className: cx(image.props.className, styles.image),
            })}
          </Block.Main>
        </Block>
        {imageLabel && (
          <div className={styles['image-label-container']}>
            <TitlePlate className={styles['image-label']}>
              {imageLabel}
            </TitlePlate>
          </div>
        )}
      </div>
    </div>
  )
}

export default TextAndImageBlock
