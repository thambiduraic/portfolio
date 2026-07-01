import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NeuralSphere = () => {
  const pointsRef = useRef();
  const groupRef = useRef();
  const ringRef = useRef();

  const [positions, connections] = useMemo(() => {
    // Pure deterministic pseudo-random generator
    let seed = 42;
    const random = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    const count = 250;
    const pos = new Float32Array(count * 3);
    const tempPositions = [];

    // Generate spherical coordinates
    for (let i = 0; i < count; i++) {
      const u = random();
      const v = random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 3.12 + random() * 0.78; // radius between 3.12 and 3.9 (expanded 30%)

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      tempPositions.push(new THREE.Vector3(x, y, z));
    }

    // Find connections (lines between points that are close)
    const conn = [];
    for (let i = 0; i < count; i++) {
      let connectionsCount = 0;
      for (let j = i + 1; j < count; j++) {
        if (connectionsCount > 2) break; // Limit connections per node
        const dist = tempPositions[i].distanceTo(tempPositions[j]);
        if (dist < 1.7) { // distance threshold expanded 30%
          conn.push(tempPositions[i].x, tempPositions[i].y, tempPositions[i].z);
          conn.push(tempPositions[j].x, tempPositions[j].y, tempPositions[j].z);
          connectionsCount++;
        }
      }
    }

    return [pos, new Float32Array(conn)];
  }, []);

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(connections, 3));
    return geo;
  }, [connections]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const targetX = state.pointer.x * 0.4;
    const targetY = state.pointer.y * 0.4;

    if (groupRef.current) {
      // Rotation + Mouse Lag Parallax
      groupRef.current.rotation.y = time * 0.05 + targetX * 0.2;
      groupRef.current.rotation.x = time * 0.02 + targetY * 0.2;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = -time * 0.1;
      ringRef.current.rotation.y = Math.sin(time * 0.2) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#2563EB"
          size={0.08}
          sizeAttenuation={true}
          transparent
          opacity={0.85}
          blending={THREE.NormalBlending}
          depthWrite={false}
        />
      </points>

      {/* Network Connections */}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial
          color="#0891B2"
          transparent
          opacity={0.25}
          blending={THREE.NormalBlending}
          depthWrite={false}
        />
      </lineSegments>

      {/* Central Glowing Core */}
      <mesh>
        <sphereGeometry args={[0.78, 16, 16]} />
        <meshBasicMaterial
          color="#3B82F6"
          transparent
          opacity={0.2}
          blending={THREE.NormalBlending}
        />
      </mesh>

      {/* Orbiting Energy Ring */}
      <group ref={ringRef} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <mesh>
          <torusGeometry args={[4.16, 0.015, 8, 64]} />
          <meshBasicMaterial
            color="#7c3aed"
            transparent
            opacity={0.25}
            blending={THREE.NormalBlending}
          />
        </mesh>
      </group>
    </group>
  );
};

export const NeuralNetwork = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
      <Canvas
        camera={{ position: [0, 0, 8.2], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <NeuralSphere />
      </Canvas>
    </div>
  );
};
