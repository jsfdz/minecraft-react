import { usePlane } from '@react-three/cannon'
import { groundTextura } from '../assets/img/texturas'
import { useStore } from '../hooks/useStore'

function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0]
  }))

  const [addCube] = useStore(state => [state.addCube])

  groundTextura.repeat.set(100, 100)

  return (
    <mesh
      ref={ref} onClick={
        (e) => {
          e.stopPropagation()
          const [x, y, z] = Object.values(e.point).map(v => Math.ceil(v))
          addCube(x, y, z)
        }
      }
    >
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <meshStandardMaterial attach='material' map={groundTextura} />
    </mesh>
  )
}

export default Ground
