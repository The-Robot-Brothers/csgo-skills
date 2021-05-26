import { useMap } from '../context/Map'

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

  return (
    <div className="container">
      <img src={map.img} alt={map.name} />

      <div className="menu-team">
        <button>
          <img src={TrImg} alt="Terrorist" onClick={() => {}} />
        </button>
        <button>
          <img src={CtImg} alt="Counter Terrorist" />
        </button>
      </div>

      <div className="menu-bombs">
        <button>
          <img src={SelectTeamImg} alt="select team" />
        </button>
        <button>
          <img src={FlashImg} alt="flash" />
        </button>
        <button>
          <img src={GrenadeImg} alt="grenade" />
        </button>
        <button>
          <img src={MolotovImg} alt="molotov" />
        </button>
        <button>
          <img src={SmokeImg} alt="smoke" />
        </button>
      </div>
    </div>
  )
}
