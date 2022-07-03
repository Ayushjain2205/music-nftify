import React from 'react'
import Navbar from './Navbar'
import AudioPlayer from 'react-h5-audio-player'
import info from '../helpers/dbhelper'
import 'react-h5-audio-player/lib/styles.css'
import Lottie from 'react-lottie'
import Particles from 'react-particles-js'
import lottie1 from '../lotties/lottie1.json'
import lottie2 from '../lotties/lottie2.json'
import lottie3 from '../lotties/lottie3.json'
import lottie4 from '../lotties/lottie4.json'
import lottie5 from '../lotties/lottie5.json'
import lottie6 from '../lotties/lottie6.json'
import lottie7 from '../lotties/lottie7.json'
import lottie8 from '../lotties/lottie8.json'
import lottie9 from '../lotties/lottie9.json'

function Player(props) {
  const id = props.match.params.id.substring(1)
  const name = props.match.params.name.substring(1)
  const audio = info[id - 1]['audio']
  var lotties = {
    lottie1: lottie1,
    lottie2: lottie2,
    lottie3: lottie3,
    lottie4: lottie4,
    lottie5: lottie5,
    lottie6: lottie6,
    lottie7: lottie7,
    lottie8: lottie8,
    lottie9: lottie9,
  }
  var animation = lotties[`lottie${id}`]
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <div>
      <Navbar />
      <Particles
        style={{ position: 'absolute' }}
        height="85%"
        width="95%"
        params={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: ['#ffffff', '#ff14ff', '#79ff53', '#14faff'],
            },
            line_linked: {
              color: {
                value: '#1a1a2e',
              },
              opacity: 0,
            },
            shape: {
              type: ['star'],
            },
            size: {
              value: 8,
            },
            move: {
              speed: 0.5,
            },
            opacity: {
              value: 1.0,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
          },
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 80,
          left: 0,
          width: '100%',
          height: '90%',
        }}
      >
        <div className="player-container">
          <h1 className="player-title">{`${name}`}</h1>
          <Lottie options={defaultOptions} height={550} width={400} />
        </div>
        <footer style={{ position: 'fixed', bottom: 0, width: '100%' }}>
          <AudioPlayer autoPlay src={audio} />
          <button className="buy-btn">Buy NFT</button>
        </footer>
      </div>
    </div>
  )
}

export default Player
