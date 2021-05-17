import '../styles/sidebar.scss'

export function SideBar() {
  return (
    <div className="container">
      <nav className="sidebar">
        <span className="title">
          CSGO <p>Skills</p>
        </span>
        <div className="container-buttons">
          <button className="button-map">Dust 2</button>
          <button className="button-map">Inferno</button>
          <button className="button-map">Mirage</button>
          <button className="button-map">Train</button>
          <button className="button-map">Overpass</button>
          <button className="button-map">Nuke</button>
        </div>
      </nav>
    </div>
  )
}
