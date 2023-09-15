import { Character } from '@/@types'
import { getCharacters } from '@/services'
import { useQuery } from '@tanstack/react-query'

export function useCharacters() {
  const { data, error, isLoading } = useQuery<Character[]>({
    queryKey: ['characters'],
    queryFn: getCharacters,
  })

  const characters = data ?? []

  return {
    characters,
    isLoading,
    error,
  }
}
