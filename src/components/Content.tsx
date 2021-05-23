import { useMap } from '../context/Map'

import '../styles/content.scss'

export function Content() {
  const { map } = useMap()

  console.log(map)

  return (
    <div className="container">
      <img src={map.img} alt={map.name} />
    </div>
  )
}
