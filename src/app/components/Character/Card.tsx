'use client'
import { useCharacters } from '@/hook/useChareacter'
import Loading from '../Loading'

export default function Card() {
  const { characters, isLoading, error } = useCharacters()

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <h1>Erro ao carregar</h1>
  }

  return (
    <div className="text-white">
      {characters.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <img src={item.image} alt={item.name} />
          </div>
        )
      })}
    </div>
  )
}
