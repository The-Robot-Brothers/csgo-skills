import '../styles/layout.scss'

import { SideBar } from './SideBar'
import { Content } from './Content'

export function Layout() {
  return (
    <div className="container">
      <SideBar />
      <Content />
    </div>
  )
}
