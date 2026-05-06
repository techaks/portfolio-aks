import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function MiniSphere() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      300 / 300,
      0.1,
      1000
    );

    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(500, 500);

    mountRef.current.appendChild(renderer.domElement);

    // Detailed Geometry
    const geometry = new THREE.IcosahedronGeometry(1.2, 4);

    // Sky Blue Material
    const material = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.9,
    });

    const sphere = new THREE.Mesh(geometry, material);

    scene.add(sphere);

    // Rotation Speed
    let rotationSpeed = 0.003;

    // Hover Effects
    const handleMouseEnter = () => {
      rotationSpeed = 0.03;
    };

    const handleMouseLeave = () => {
      rotationSpeed = 0.003;
    };

    const container = mountRef.current;

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      sphere.rotation.y += rotationSpeed;
      sphere.rotation.x += rotationSpeed * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);

      container.removeChild(renderer.domElement);

      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "400",
        height: "400px",
        pointerEvents: "auto",
      }}
    />
  );
}