import '../styles/sidebar.scss'

import { useMap, maps } from '../context/Map'

export function SideBar() {
  const { setMap } = useMap()

  // function handleImage(event: any) {
  //   const buttonChecked = event.target
  //   // buttonChecked.classList.toggle('selected')

  //   // console.log(buttonChecked.className)
  //   // console.log(buttonChecked.title)
  // }

  return (
    <div className="container">
      <nav className="sidebar">
        <span className="title">
          CSGO<p>Skills</p>
        </span>
        <button onClick={() => setMap(maps[0])}>Dust 2</button>
        <button onClick={() => setMap(maps[1])}>Inferno</button>
        <button onClick={() => setMap(maps[2])}>Mirage</button>
        <button onClick={() => setMap(maps[3])}>Train</button>
        <button onClick={() => setMap(maps[4])}>Overpass</button>
        <button onClick={() => setMap(maps[5])}>Nuke</button>
      </nav>
    </div>
  )
}
