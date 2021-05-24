import CtImg from '../assets/icon/ct.png'
import TrImg from '../assets/icon/tr.png'

export function MenuTeam() {
  return (
    <div className="container">
      <img src={TrImg} alt="Terrorist" />
      <img src={CtImg} alt="Counter Terrorist" />
    </div>
  )
}
