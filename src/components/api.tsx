import axios from 'axios'
import { useState, useEffect } from 'react'

type Character = {
  id: string;
  name: string;
  ki: number;
  // add other properties as needed
};

export default function Api() {
    const [data, setData] = useState<Character[]>([]);
    const url = 'https://dragonball-api.com/api/characters';
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data.items);

            } catch (error) {
                console.log('error', error);
            }  
        }
        fetchData();     
    
    }, []);


  return (
    <div>
      {data.map((character) => (
        <h1 key={character.id}>{character.name} {character.ki}</h1>

        ))}
    </div>
  )
}