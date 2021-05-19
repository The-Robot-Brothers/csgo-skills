import '../styles/layout.scss'

import { Content } from './Content'
import { SideBar } from './SideBar'

export function Layout() {
  return (
    <div className="container">
      <SideBar />
      <Content />
    </div>
  )
}
