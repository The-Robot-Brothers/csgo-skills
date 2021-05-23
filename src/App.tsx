import MapProvider from './context/Map'

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
