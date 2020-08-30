import React, { useState, useEffect, useRef, useMemo } from 'react'
import cx from 'classnames'
import { throttle } from 'lodash-es'

import Block from './Block'
import TextAndImageBlock from './TextAndImageBlock'
import TitlePlate from './TitlePlate'
import TitleGroup from './TitleGroup'
import Warnings from './Warnings'
import VideoBlock from './VideoBlock'
import styles from './App.module.scss'
import logo from './Simple_world_map.svg'

const useParallax = (
  onMouseMove: (progressX: number, progressY: number) => void
) => {
  const windowSize = useRef<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const moveListener = throttle((e: MouseEvent) => {
      const progressX = e.pageX / windowSize.current.width
      const progressY = e.pageY / windowSize.current.height
      onMouseMove(progressX, progressY)
    }, 50)
    const moveOpts = { passive: true }
    window.addEventListener('mousemove', moveListener, moveOpts)

    const resizeListener = () => {
      windowSize.current.width = window.innerWidth
      windowSize.current.height = window.innerHeight
    }
    const resizeOpts = { passive: true }
    window.addEventListener('resize', resizeListener, resizeOpts)

    return () => {
      window.removeEventListener('mousemove', moveListener, moveOpts as any)
      window.removeEventListener('resize', resizeListener, resizeOpts as any)
    }
  }, [onMouseMove])
}

const MiniTitle: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return <p className={cx(styles.minititle, className)}>{children}</p>
}

const MiniP: React.FC<{ className?: string }> = ({ className, children }) => (
  <p className={className} style={{ marginBottom: '0', fontSize: '0.9em' }}>
    {children}
  </p>
)

function App() {
  useParallax(
    useMemo(
      () => (progressX: number, progressY: number) => {
        const px = progressX - 0.5
        const py = progressY - 0.5
        const dotsMagnitude = 40
        const smallGridMagnitude = 30
        const comboGridMagnitude = 20
        const largeGridMagnitude = 10
        document.body.style.backgroundPosition =
          `0 0, ` +
          `${62 + dotsMagnitude * px}px ${62 + dotsMagnitude * py}px, ` +
          `${smallGridMagnitude * px}px ${smallGridMagnitude * py}px, ` +
          `${smallGridMagnitude * px}px ${smallGridMagnitude * py}px, ` +
          `${10 + comboGridMagnitude * px}px ${
            10 + comboGridMagnitude * py
          }px, ` +
          `${10 + comboGridMagnitude * px}px ${
            10 + comboGridMagnitude * py
          }px, ` +
          `${10 + comboGridMagnitude * px}px ${
            10 + comboGridMagnitude * py
          }px, ` +
          `${10 + comboGridMagnitude * px}px ${
            10 + comboGridMagnitude * py
          }px, ` +
          `${largeGridMagnitude * px}px ${largeGridMagnitude * py}px, ` +
          `${largeGridMagnitude * px}px ${largeGridMagnitude * py}px, ` +
          `center center`
      },
      []
    )
  )

  const [animated, setAnimated] = useState(false)
  useEffect(() => {
    const startAnimsIfTabVisible = () => {
      if (document.visibilityState === 'visible') {
        setAnimated(true)
        return true
      }
      return false
    }

    if (startAnimsIfTabVisible()) {
      return
    }

    document.addEventListener('visibilitychange', startAnimsIfTabVisible)
    return () =>
      document.removeEventListener('visibilitychange', startAnimsIfTabVisible)
  }, [])

  return (
    <div
      className={cx(styles.app, 'container-fluid', {
        'anim-shift-in-go': animated,
      })}
    >
      <div className={cx(styles['top-line'])}>ATLS_MIS_0108_5682</div>

      <div className="row justify-content-center pt-5">
        <div className="col-11">
          <div className="row">
            <div className="col-3" />
            <div className="col-6 px-5">
              <div className="row mb-4">
                <div className="col-6">
                  <TitleGroup
                    className="anim-shift-in anim-shift-in-0"
                    heading="KVA"
                    title="TERRORIST ORGANIZATION"
                    subtitle="MISSION TYPE: HOSTAGE RESCUE"
                  />
                </div>
                <div className="col-6">
                  <div
                    className={cx(
                      'anim-shift-in anim-shift-in-3',
                      styles['warnings-container']
                    )}
                  >
                    <Warnings
                      className={styles.warnings}
                      title="EXTREMELY DANGEROUS"
                      subtitle="THREAT LEVEL - 09"
                      subsubtitle="LEADING ANTI-WESTERN TERRORIST ORGANIZATION"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3" />
          </div>

          <div className="row">
            {/* sidebar */}
            <div className="col-3">
              <div className="row mb-4">
                <TextAndImageBlock
                  className="col-12 anim-shift-in anim-shift-in-0"
                  image={
                    <img
                      src="https://vignette.wikia.nocookie.net/callofduty/images/e/eb/Samuel_Abidoyo_AW.png/revision/latest?cb=20141120015458"
                      alt="Samuel Abidoyo portrait from Call of Duty: Advanced Warfare"
                    />
                  }
                  imageLabel="SAMUEL ABIDOYO"
                >
                  <TitlePlate className={styles.pmargin} as="h3">
                    TAKEN HOSTAGE
                  </TitlePlate>
                  <div className={styles.pmargin}>
                    <MiniTitle className={styles['minititle--dense']}>
                      NIGERIAN PRIME MINISTER
                    </MiniTitle>
                    <MiniTitle className={styles['minititle--dense']}>
                      LANGUAGE: ENGLISH
                    </MiniTitle>
                    <MiniTitle className={styles['minititle--dense']}>
                      HEIGHT: 5'10" - 6'2"
                    </MiniTitle>
                  </div>
                  <MiniP>LAST KNOWN LOCATION</MiniP>
                  <MiniP>Lagos, Nigeria</MiniP>
                  <MiniP>
                    Prime Minister Abidoyo comes from a family of fishermen.
                    Unlike his forefathers, Samuel went to college and graduated
                    at the top of his class.
                  </MiniP>
                </TextAndImageBlock>
              </div>
              <div className="row">
                <Block
                  className="col-12 anim-shift-in anim-shift-in-1"
                  lines="both"
                >
                  <Block.Before
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <TitlePlate as="h3">HOSTAGE LOCATION</TitlePlate>
                  </Block.Before>
                  <Block.Main>
                    <img
                      className={styles.map}
                      src={logo}
                      alt="World map"
                    ></img>
                  </Block.Main>
                  <Block.After>
                    <MiniTitle>POPULATION</MiniTitle>
                    <ul>
                      <li>City{'\t'}20,000,000 (estimate)</li>
                      <li>Density{'\t'}20,000/km2</li>
                      <li>Urban{'\t'}12,080,000 (March 2013)</li>
                    </ul>
                  </Block.After>
                </Block>
              </div>
            </div>

            {/* middle content */}
            <div className="col-6 px-5">
              <VideoBlock
                className="anim-shift-in anim-shift-in-2"
                imgSrc="https://cdn.arstechnica.net/wp-content/uploads/sites/3/2016/11/b185b7c7-bf62-4604-9384-6321b7a6b7d2_COD_IW_beta.jpg"
                imgAlt="Screenshot from Call of Duty"
                feedName="ATLAS // FEED 02"
                sourceDescription="SOURCED COVERT FOOTAGE - SPV // 1510 - 01"
              />
              <div className="row">
                <Block
                  dense
                  className="col-5 anim-shift-in anim-shift-in-2"
                  lines="none"
                >
                  <Block.Main>
                    <p className="mt-4 mb-0">ALL AVAILABLE INTEL - KVA</p>
                    <p>ATLAS COVERT FEEDS - STRICTLY CONFIDENTIAL</p>
                  </Block.Main>
                </Block>
              </div>
            </div>

            {/* right sidebar */}
            <div className="col-3">
              <Block
                className="anim-shift-in anim-shift-in-4"
                dense
                lines="none"
              >
                <Block.Main>
                  <TitlePlate className="mb-2">OPTIONAL FEEDS</TitlePlate>
                  <p className="my-0">ALL AVAILABLE INTEL</p>
                  <p className="mb-3">
                    ATLAS COVERT FEEDS - STRICTLY CONFIDENTIAL
                  </p>
                  <p>
                    We believe this to be the work of the KVA - a leading
                    anti-Western terrorist organization founded by former
                    Chechen separatists.
                  </p>
                </Block.Main>
              </Block>
              <VideoBlock
                className="anim-shift-in anim-shift-in-4"
                feedName="ALTAS // FEED 01"
                sourceDescription="SOURCED COVERT FOOTAGE - SPV // 1510 - 01"
                imgSrc="https://vignette.wikia.nocookie.net/callofduty/images/c/c3/Radioactive_XBOX_One_Achievement_Image_CoDAW.jpg/revision/latest?cb=20160918205959"
                imgAlt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className={cx(styles['bottom-line'])}>
        <div className={styles['bottom-line__start']}>
          ATLSYS 1.07.30 // MISSION DATABASE
        </div>
        <div className={styles['bottom-line__end']}></div>
      </div>
    </div>
  )
}

export default App
