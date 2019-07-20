import React, { useState } from 'react'
import { render } from 'react-dom'
import { sample } from 'lodash'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import './index.css'


const major_arcana = [
  'http://www.neonmoontarot.com/Images/Major/00%20Fool.png',
  'http://www.neonmoontarot.com/Images/Major/01%20Magician.png',
  'http://www.neonmoontarot.com/Images/Major/02%20Priestess.png',
  'http://www.neonmoontarot.com/Images/Major/03%20Empress.png',
  'http://www.neonmoontarot.com/Images/Major/04%20Emperor.png',
  'http://www.neonmoontarot.com/Images/Major/05%20Hierophant.png',
  'http://www.neonmoontarot.com/Images/Major/06%20Lovers.png',
  'http://www.neonmoontarot.com/Images/Major/07%20Chariot.png',
  'http://www.neonmoontarot.com/Images/Major/08%20Strength.png',
  'http://www.neonmoontarot.com/Images/Major/09%20Hermit.png',
  'http://www.neonmoontarot.com/Images/Major/10%20Fortune.png',
  'http://www.neonmoontarot.com/Images/Major/11%20Justice.png',
  'http://www.neonmoontarot.com/Images/Major/12%20Hanged.png',
  'http://www.neonmoontarot.com/Images/Major/13%20Death.png',
  'http://www.neonmoontarot.com/Images/Major/14%20Temperance.png',
  'http://www.neonmoontarot.com/Images/Major/15%20Devil.png',
  'http://www.neonmoontarot.com/Images/Major/17%20Star.png',
  'http://www.neonmoontarot.com/Images/Major/18%20Moon.png',
  'http://www.neonmoontarot.com/Images/Major/19%20Sun.png',
  'http://www.neonmoontarot.com/Images/Major/20%20Judgement.png',
  'http://www.neonmoontarot.com/Images/Major/21%20World.png',
  'http://www.neonmoontarot.com/Images/Zent/01%20Ace%20of%20Zent.png',
  'http://www.neonmoontarot.com/Images/Zent/02%20Two%20of%20Zent.png',
  'http://www.neonmoontarot.com/Images/Zent/03%20Three%20of%20Zent.png',
  'http://www.neonmoontarot.com/Images/Zent/04%20Four%20of%20Zent.png',
  'http://www.neonmoontarot.com/Images/Zent/05%20Five%20of%20Zent.png',
  'http://www.neonmoontarot.com/Images/Zent/06%20Six%20of%20Zent.png',
  'http://www.neonmoontarot.com/Images/Zent/07%20Seven%20of%20Zent.png',
  'http://www.neonmoontarot.com/Images/Zent/08%20Eight%20of%20Zent.png',
  'http://www.neonmoontarot.com/Images/Zent/09%20Nine%20of%20Zent.png',
  'http://www.neonmoontarot.com/Images/Zent/10%20Ten%20of%20Zent.png',
  'http://www.neonmoontarot.com/Images/Zent/11%20Apprentice%20of%20Zent.png',
  'http://www.neonmoontarot.com/Images/Zent/12%20Agent%20of%20Zent.png',
  'http://www.neonmoontarot.com/Images/Zent/13%20Supervisor%20of%20Zent.png',
  'http://www.neonmoontarot.com/Images/Zent/14%20Executive%20of%20Zent.png',
  'http://www.neonmoontarot.com/Images/Vials/01%20Ace%20of%20Vials.png',
  'http://www.neonmoontarot.com/Images/Vials/02%20Two%20of%20Vials.png',
  'http://www.neonmoontarot.com/Images/Vials/03%20Three%20of%20Vials.png',
  'http://www.neonmoontarot.com/Images/Vials/04%20Four%20of%20Vials.png',
  'http://www.neonmoontarot.com/Images/Vials/05%20Five%20of%20Vials.png',
  'http://www.neonmoontarot.com/Images/Vials/06%20Six%20of%20Vials.png',
  'http://www.neonmoontarot.com/Images/Vials/07%20Seven%20of%20Vials.png',
  'http://www.neonmoontarot.com/Images/Vials/08%20Eight%20of%20Vials.png',
  'http://www.neonmoontarot.com/Images/Vials/09%20Nine%20of%20Vials.png',
  'http://www.neonmoontarot.com/Images/Vials/10%20Ten%20of%20Vials.png',
  'http://www.neonmoontarot.com/Images/Vials/11%20Apprentice%20of%20Vials.png',
  'http://www.neonmoontarot.com/Images/Vials/12%20Agent%20of%20Vials.png',
  'http://www.neonmoontarot.com/Images/Vials/13%20Supervisor%20of%20Vials.png',
  'http://www.neonmoontarot.com/Images/Vials/14%20Executive%20of%20Vials.png',  'http://www.neonmoontarot.com/Images/Vials/01%20Ace%20of%20Vials.png',
  'http://www.neonmoontarot.com/Images/Wires/01%20Ace%20of%20Wires.png',
  'http://www.neonmoontarot.com/Images/Wires/02%20Two%20of%20Wires.png',
  'http://www.neonmoontarot.com/Images/Wires/03%20Three%20of%20Wires.png',
  'http://www.neonmoontarot.com/Images/Wires/04%20Four%20of%20Wires.png',
  'http://www.neonmoontarot.com/Images/Wires/05%20Five%20of%20Wires.png',
  'http://www.neonmoontarot.com/Images/Wires/06%20Six%20of%20Wires.png',
  'http://www.neonmoontarot.com/Images/Wires/07%20Seven%20of%20Wires.png',
  'http://www.neonmoontarot.com/Images/Wires/08%20Eight%20of%20Wires.png',
  'http://www.neonmoontarot.com/Images/Wires/09%20Nine%20of%20Wires.png',
  'http://www.neonmoontarot.com/Images/Wires/10%20Ten%20of%20Wires.png',
  'http://www.neonmoontarot.com/Images/Wires/11%20Apprentice%20of%20Wires.png',
  'http://www.neonmoontarot.com/Images/Wires/12%20Agent%20of%20Wires.png',
  'http://www.neonmoontarot.com/Images/Wires/13%20Supervisor%20of%20Wires.png',
  'http://www.neonmoontarot.com/Images/Wires/14%20Executive%20of%20Wires.png',
  'http://www.neonmoontarot.com/Images/Arms/01%20Ace%20of%20Arms.png',
  'http://www.neonmoontarot.com/Images/Arms/02%20Two%20of%20Arms.png',
  'http://www.neonmoontarot.com/Images/Arms/03%20Three%20of%20Arms.png',
  'http://www.neonmoontarot.com/Images/Arms/04%20Four%20of%20Arms.png',
  'http://www.neonmoontarot.com/Images/Arms/05%20Five%20of%20Arms.png',
  'http://www.neonmoontarot.com/Images/Arms/06%20Six%20of%20Arms.png',
  'http://www.neonmoontarot.com/Images/Arms/07%20Seven%20of%20Arms.png',
  'http://www.neonmoontarot.com/Images/Arms/08%20Eight%20of%20Arms.png',
  'http://www.neonmoontarot.com/Images/Arms/09%20Nine%20of%20Arms.png',
  'http://www.neonmoontarot.com/Images/Arms/10%20Ten%20of%20Arms.png',
  'http://www.neonmoontarot.com/Images/Arms/11%20Apprentice%20of%20Arms.png',
  'http://www.neonmoontarot.com/Images/Arms/12%20Agent%20of%20Arms.png',
  'http://www.neonmoontarot.com/Images/Arms/13%20Supervisor%20of%20Arms.png',
  'http://www.neonmoontarot.com/Images/Arms/14%20Executive%20of%20Arms.png'
]

let i = 0
let cards = []
while (i < 7) {
  cards.push(sample(major_arcana))
  i++
}


// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, y: i * -4, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function SevenCardSample() {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.1 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
  })
  // Now we're just masping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return props.map(({ x, y, rot, scale }, i) => (
    <animated.div key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
      {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
      <animated.div {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
    </animated.div>
  ))
}

render(){<SevenCardSample />, document.getElementById('sample')}


export default SevenCardSample