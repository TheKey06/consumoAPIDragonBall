import axios from 'axios'
import { useState, useEffect } from 'react'
import type { Character } from '../type/typeCharacter';



export const Api = () => {
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


  return data 
}