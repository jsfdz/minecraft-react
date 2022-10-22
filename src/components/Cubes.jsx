import { useStore } from '../hooks/useStore'
import Cube from './Cube'

function Cubes () {
  const [cubes] = useStore(state => [state.cubes])

  return (
    cubes.map(({ key, pos, texture }) => (
      <Cube key={key} pos={pos} texture={texture} />
    ))
  )
}

export default Cubes
