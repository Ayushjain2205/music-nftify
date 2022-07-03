import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/lottie0.json'
import { useHistory } from 'react-router-dom'

function Landing() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  let history = useHistory()
  const getStarted = () => {
    history.push('/meditations')
  }
  const blogs = () => {
    history.push('/blogs')
  }
  return (
    <div>
      <div className="landing-div">
        <h1 className="branding">
          <i class="fa-solid fa-headphones-simple"></i>
          <i> Music NFTify</i>
        </h1>
        <div>
          <h3 className="tagline">
            <span
              onClick={blogs}
              className="start bottom-btn"
              variant="primary"
            >
              Mint <i class="fas fa-angle-right"></i>
            </span>
            <i>AI generated music as NFTs! </i>
          </h3>
          <h3 className="tagline">
            <i>Buy pre-minted NFTs to support musicians!</i>
            <span
              onClick={getStarted}
              className="start bottom-btn"
              variant="primary"
            >
              Buy! <i class="fas fa-angle-right"></i>
            </span>
          </h3>
        </div>

        <Lottie options={defaultOptions} height={550} width={600} />
      </div>
    </div>
  )
}

export default Landing
