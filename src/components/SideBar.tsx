import '../styles/sidebar.scss'

export function SideBar() {
  function handleImage(event: any) {
    const buttonChecked = event.target

    buttonChecked.classList.toggle('selected')
  }

  return (
    <div className="container">
      <nav className="sidebar">
        <span className="title">
          CSGO<p>Skills</p>
        </span>
        <button onClick={handleImage}>Dust 2</button>
        <button onClick={handleImage}>Inferno</button>
        <button onClick={handleImage}>Mirage</button>
        <button onClick={handleImage}>Train</button>
        <button onClick={handleImage}>Overpass</button>
        <button onClick={handleImage}>Nuke</button>
      </nav>
    </div>
  )
}
