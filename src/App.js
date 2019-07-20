import React, { useState } from 'react'
import { render } from 'react-dom'
import { sample } from 'lodash'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import './index.css'
import { Cards } from './Cards.js'


const App = () => {
  render(<App><Cards /></App>, document.getElementById('root'))
}


export default App