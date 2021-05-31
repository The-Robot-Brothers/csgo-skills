import { createContext, useContext, useState } from 'react'

import dust2Img from '../assets/maps/dust2.jpg'
import infernoImg from '../assets/maps/inferno.jpg'
import mirageImg from '../assets/maps/mirage.jpg'
import nukeImg from '../assets/maps/nuke.jpg'
import vertigoImg from '../assets/maps/vertigo.jpg'
import overpassImg from '../assets/maps/overpass.jpg'
import trainImg from '../assets/maps/train.jpg'

const MapContext = createContext()

export const maps = [
  {
    name: 'dust2',
    img: dust2Img,
    video: [
      {
        type: 'flash',
        src: 'https://www.youtube.com/embed/x0Xo58tjarw'
      },
      {
        type: 'smoke',
        src: 'https://www.youtube.com/embed/A90hh7JcJyg'
      },
      {
        type: 'grenade',
        src: 'https://www.youtube.com/embed/duyTBVkHATA'
      },
      {
        type: 'molotov',
        src: 'https://www.youtube.com/embed/Xhg16t1okAo'
      }
    ]
  },
  {
    name: 'inferno',
    img: infernoImg
  },
  {
    name: 'mirage',
    img: mirageImg
  },
  {
    name: 'nuke',
    img: nukeImg
  },
  {
    name: 'vertigo',
    img: vertigoImg
  },
  {
    name: 'overpass',
    img: overpassImg
  },
  {
    name: 'train',
    img: trainImg
  }
]

export default function MapProvider({ children }) {
  const [map, setMap] = useState(maps[0])

  return (
    <MapContext.Provider value={{ map, setMap }}>
      {children}
    </MapContext.Provider>
  )
}

export function useMap() {
  const context = useContext(MapContext)
  const { map, setMap } = context
  return { map, setMap }
}
