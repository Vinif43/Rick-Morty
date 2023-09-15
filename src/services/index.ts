import { Character } from '@/@types'
import axios from 'axios'

const CharacterUrl = 'https://rickandmortyapi.com/api/character'

export const getCharacters = async (): Promise<Character[]> => {
  const response = await axios.get(CharacterUrl)
  return response.data.results
}
