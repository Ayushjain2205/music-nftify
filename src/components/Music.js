import React, { Component } from 'react'
import Navbar from './Navbar'
import MeditationTile from './MusicTile'

export class Music extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div style={tileStyle}>
            {this.props.data.map((item) => (
              <MeditationTile
                key={item.id}
                id={item.id}
                src={item.src}
                name={item.name}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
const tileStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1.2rem',
  margin: '1.2rem',
}

export default Music
