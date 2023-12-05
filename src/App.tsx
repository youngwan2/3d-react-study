import { Canvas } from '@react-three/fiber'
import './App.css'
import Rect from './components/Rect'

function App() {

  return (
    <>
      <Canvas>
        
        <Rect position={[-1.2,0,0]} />
        <Rect position={[1.5,0,0]} />
        
      </Canvas>
    </>
  )
}

export default App
