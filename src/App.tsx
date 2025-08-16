import './index.css'
import { Header } from "../src/components/header.tsx"
import { Card } from '../src/components/card.tsx'

export const App = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-blue-300 to-blue-600 flex items-center justify-center">
      <Header/>
      <Card />
    </div>
  )
}