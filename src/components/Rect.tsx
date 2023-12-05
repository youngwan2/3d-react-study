import { ThreeElements } from "@react-three/fiber/dist/declarations/src";
import { useThree, useFrame } from "@react-three/fiber";
import {useRef} from 'react'
function Rect(props: ThreeElements['mesh']) {

    const {size, scene, camera } = useThree()

    const boxRef = useRef<THREE.Mesh>(null)

    useFrame((state, delta)=> {
        if(boxRef.current) {
            boxRef.current.rotation.x += delta
        }
    })

    return (
        <>
            <directionalLight position={[5, 5, 5]} />
            <mesh scale={1.5} rotation={[0, 50, 0]} {...props} ref={boxRef}>
                <boxGeometry args={[1, 1, 1]}></boxGeometry>
                <meshStandardMaterial color={'red'} />
            </mesh>
        </>
    );
}

export default Rect;