import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Preload } from "@react-three/drei"
import * as random from "maath/random";
import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import styled from "styled-components";
const StyleCanvasWrapper = styled.div`
    width:100%;
    height:auto;
    position:absolute;
    inset:0;
    pointer-events: none;
`

const Stars = (props: any) => {
    useFrame((state,delta) => {
        ref.current.rotation.x -= delta/10;
        ref.current.rotation.y -= delta/15;

    })
    const ref = useRef<THREE.Points>(null!);
function inSphere32(count: number, radius: number) {
  return random.inSphere(new Float32Array(count * 3), { radius }) as Float32Array;
}

const [sphere] = useState<Float32Array>(() => inSphere32(500, 1.2));
    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );

}
const StyleStarsCanvas = () => {
    return (
        <StyleCanvasWrapper>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>
                <Preload all />
            </Canvas>
        </StyleCanvasWrapper>
    )
}
export default StyleStarsCanvas