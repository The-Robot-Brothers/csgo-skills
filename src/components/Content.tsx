import { useMap } from '../context/MapContext'

import '../styles/content.scss'

import CtImg from '../assets/icon/ct.png'
import TrImg from '../assets/icon/tr.png'

import SelectTeamImg from '../assets/icon/select.svg'
import FlashImg from '../assets/bombs/flash.svg'
import GrenadeImg from '../assets/bombs/grenade.svg'
import MolotovImg from '../assets/bombs/molotov.svg'
import SmokeImg from '../assets/bombs/smoke.svg'

export function Content() {
  const { map } = useMap()

  console.log(map)

  // console.log(map.video[0].src)
  // console.log(map.video[1].src)
  // console.log(map.video[2].src)
  // console.log(map.video[3].src)

  function HandleTeamToBombs() {
    var display = document.getElementById('menuteam')!.style.display

    if (display === 'none') {
      document.getElementById('menuteam')!.style.display = 'flex'
      document.getElementById('menubombs')!.style.display = 'none'
      document.getElementById('menuvideos')!.style.display = 'none'
    } else {
      document.getElementById('menuteam')!.style.display = 'none'
      document.getElementById('menubombs')!.style.display = 'flex'
      document.getElementById('menuvideos')!.style.display = 'grid'
    }
  }

  function HandleBombsToVideos() {}

  return (
    <div className="container">
      <img src={map.img} alt={map.name} />

      <div className="menu-team" id="menuteam">
        <button onClick={HandleTeamToBombs}>
          <img src={TrImg} alt="terrorist" />
        </button>
        <button onClick={HandleTeamToBombs}>
          <img src={CtImg} alt="counter terrorist" />
        </button>
      </div>

      <div className="menu-bombs" id="menubombs">
        <button onClick={HandleTeamToBombs}>
          <img src={SelectTeamImg} alt="select team" onClick={() => {}} />
        </button>
        <hr />
        <button onClick={HandleBombsToVideos}>
          <img src={FlashImg} alt="flash" />
        </button>
        <button onClick={HandleBombsToVideos}>
          <img src={GrenadeImg} alt="grenade" />
        </button>
        <button onClick={HandleBombsToVideos}>
          <img src={MolotovImg} alt="molotov" />
        </button>
        <button onClick={HandleBombsToVideos}>
          <img src={SmokeImg} alt="smoke" />
        </button>
      </div>

      <div className="grid-container" id="menuvideos">
        <iframe
          className="grid-item"
          src={map.video[0].src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          className="grid-item"
          src={map.video[1].src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          className="grid-item"
          src={map.video[2].src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          className="grid-item"
          src={map.video[3].src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
