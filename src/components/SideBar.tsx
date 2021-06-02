import '../styles/sidebar.scss'

import { useMap, maps } from '../context/MapContext'
import { Button } from './Button'

export function SideBar() {
  const { setMap } = useMap()

  return (
    <div className="container">
      <nav className="sidebar">
        <span className="title">
          CSGO<p>Skills</p>
        </span>
        <Button
          title="Dust 2"
          selected={false}
          onClick={() => setMap(maps[0])}
        />
        <Button
          title="Inferno"
          selected={false}
          onClick={() => setMap(maps[1])}
        />
        <Button
          title="Mirage"
          selected={false}
          onClick={() => setMap(maps[2])}
        />
        <Button title="Nuke" selected={false} onClick={() => setMap(maps[3])} />
        <Button
          title="Vertigo"
          selected={false}
          onClick={() => setMap(maps[4])}
        />
        <Button
          title="Overpass"
          selected={false}
          onClick={() => setMap(maps[5])}
        />
        <Button
          title="train"
          selected={false}
          onClick={() => setMap(maps[6])}
        />
      </nav>
    </div>
  )
}
