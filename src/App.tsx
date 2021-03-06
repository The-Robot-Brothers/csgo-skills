import MapProvider from './context/MapContext'

import { Layout } from './components/Layout'
import './styles/global.scss'

function App() {
  return (
    <MapProvider>
      <Layout />
    </MapProvider>
  )
}

export default App
