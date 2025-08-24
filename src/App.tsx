import {Api} from './hooks/useCharacter'
import './index.css'
import { Header } from './components/header'
import { Card } from './components/card'

export const App = () => {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-blue-600 flex flex-col items-center justify-center">
      <Header/>
      <Card />
      <ul>
        {Api().map((character) => (
          <li key={character.id} className="mb-4">
            <div className="bg-white rounded-lg shadow-md p-4 w-64">
              <h2 className="text-xl font-bold mb-2">{character.name}</h2>
              <p className="text-gray-600">Ki: {character.ki}</p>
              {/* Render other properties as needed */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}