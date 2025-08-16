import './index.css'
import { Header } from './components/header'
import { Card } from './components/card'

export const App = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-blue-300 to-blue-600 flex items-center justify-center">
      <Header/>
      <Card />
    </div>
  )
}