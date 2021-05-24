import { useMap } from '../context/Map'

import '../styles/content.scss'

import CtImg from '../assets/icon/ct.png'
import TrImg from '../assets/icon/tr.png'

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
    </div>
  )
}
