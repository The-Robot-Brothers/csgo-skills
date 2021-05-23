import { createContext, useContext, useState } from 'react'

import dust2Img from '../assets/dust2.jpg'
import infernoImg from '../assets/inferno.jpg'

const MapContext = createContext()

export const maps = [
  {
    name: 'dust2',
    img: dust2Img
  },
  {
    name: 'inferno',
    img: infernoImg
  },
  {
    name: 'mirage',
    img: dust2Img
  },
  {
    name: 'nuke',
    img: dust2Img
  },
  {
    name: 'overpass',
    img: dust2Img
  },
  {
    name: 'train',
    img: dust2Img
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
