import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import vertexShader from './shaders/VertexShader';
import fragmentShader from './shaders/fragmentShader';
import * as THREE from 'three';

const Fragment = () => {
    const mesh = useRef();

    const uniforms = useMemo(
        () => ({
            u_time: {
                value: 0.0,
            },
        }),
        []
    );

    useFrame((state) => {
        const { clock } = state;
        mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
    });

    return (
        <mesh ref={mesh} position={[0, 0, 0]} scale={1.0}>
            <planeGeometry args={[1, 1, 32, 32]} />
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
};

const Scene = () => {
    return (
        <Canvas camera={{ position: [1.0, 1.0, 1.25] }}>
            <Fragment />
            <axesHelper />
            <OrbitControls />
        </Canvas>
    );
};

export default Scene;