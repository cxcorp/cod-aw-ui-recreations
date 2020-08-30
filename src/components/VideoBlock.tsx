import React, { FC } from 'react'
import cx from 'classnames'

import Block from './Block'
import styles from './VideoBlock.module.scss'

const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="3 2 11 12" version="1.1" x="0px" y="0px">
    <g display="inline">
      <path d="M 4.0019531,2 C 3.489286,1.9989753 3.0000543,2.4469746 3,3 v 10 c -8.044e-4,0.763298 0.8193129,1.246101 1.4863281,0.875 l 8.9999999,-5 c 0.687694,-0.380652 0.687694,-1.369348 0,-1.75 l -8.9999999,-5 C 4.3380657,2.0429739 4.1713935,1.9999617 4.0019531,2 Z" />
    </g>
  </svg>
)

interface Props {
  className?: string
  imgSrc: string
  imgAlt: string
  feedName: string
  sourceDescription: string
}

const VideoBlock: FC<Props> = ({
  className,
  imgSrc,
  imgAlt,
  feedName,
  sourceDescription,
}) => {
  return (
    <div className={className}>
      <Block dense>
        <Block.Main>
          <img className="mb-1" width="100%" src={imgSrc} alt={imgAlt} />
          <div className={styles.subtitle}>{feedName}</div>
        </Block.Main>
      </Block>
      <Block dense lines="none" className="mt-2">
        <Block.Main>
          <div className={cx(styles.descriptionContainer)}>
            <PlayIcon className={styles['play-icon']} />
            <p className={styles.description}>{sourceDescription}</p>
          </div>
        </Block.Main>
      </Block>
    </div>
  )
}

export default VideoBlock
